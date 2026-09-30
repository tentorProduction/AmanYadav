import { NextResponse } from "next/server";

export const runtime = "nodejs";

const LIMITS = { name: 120, email: 160, topic: 60, message: 4000 };
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

// yappdf.app (two p's) — the domain with Cloudflare MX + SPF. A third p makes
// yapppdf.app, which has no DNS records at all and silently black-holes mail.
const DELIVERY_INBOX = "tentorproduction@yappdf.app";

// Best-effort per-process throttle. A single long-lived Node server gets a real
// window; a scale-to-zero deployment gets a fresh map per instance.
const hits = new Map<string, number[]>();
function throttled(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((at) => now - at < 60_000);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > 5;
}

function text(value: unknown, max: number) {
  if (typeof value !== "string") return "";
  return value.replace(/[\r\t]+/g, " ").trim().slice(0, max);
}

function escapeHtml(value: string) {
  return value.replace(/[&<>"']/g, (char) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[char] as string,
  );
}

export async function POST(request: Request) {
  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "Send a JSON body." }, { status: 400 });
  }

  const body = (payload ?? {}) as Record<string, unknown>;
  const name = text(body.name, LIMITS.name);
  const email = text(body.email, LIMITS.email);
  const topic = text(body.topic, LIMITS.topic) || "Unspecified";
  const message = text(body.message, LIMITS.message);

  // Honeypot: answer as if it worked so bots learn nothing.
  if (text(body.company, 200)) {
    return NextResponse.json({ ok: true });
  }

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Name, email and message are all required." }, { status: 400 });
  }
  if (!EMAIL_RE.test(email)) {
    return NextResponse.json({ error: "That email address doesn’t look right." }, { status: 400 });
  }
  if (message.length < 12) {
    return NextResponse.json({ error: "Tell me a little more about the project." }, { status: 400 });
  }

  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "local";
  if (throttled(ip)) {
    return NextResponse.json({ error: "Too many messages at once. Try again in a minute." }, { status: 429 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL || DELIVERY_INBOX;
  const from = process.env.CONTACT_FROM_EMAIL || "Aman Portfolio <onboarding@resend.dev>";

  if (!apiKey) {
    return NextResponse.json(
      {
        error:
          "The contact form isn’t wired up yet. Set RESEND_API_KEY in .env.local (and in the Vercel project), then it will deliver to the inbox.",
      },
      { status: 501 },
    );
  }

  const subject = `New project enquiry — ${name}`;
  const rows = [
    ["Name", name],
    ["Email", email],
    ["Topic", topic],
    ["Message", message],
  ] as const;

  const html = `<h2 style="margin:0 0 18px;font:italic 400 26px/1.2 Georgia,serif">New enquiry from ${escapeHtml(name)}</h2>
<table style="border-collapse:collapse;font:15px/1.6 -apple-system,Segoe UI,sans-serif">
${rows
  .map(
    ([label, value]) =>
      `<tr><td style="padding:6px 16px 6px 0;color:#767671;text-transform:uppercase;font-size:11px;letter-spacing:.1em;vertical-align:top">${label}</td><td style="padding:6px 0;white-space:pre-wrap">${escapeHtml(value)}</td></tr>`,
  )
  .join("\n")}
</table>`;

  const textBody = rows.map(([label, value]) => `${label}: ${value}`).join("\n");

  let response: Response;
  try {
    response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({ from, to, reply_to: email, subject, html, text: textBody }),
    });
  } catch {
    return NextResponse.json({ error: `Couldn’t reach the mail service. Email ${DELIVERY_INBOX} instead.` }, { status: 502 });
  }

  if (!response.ok) {
    const detail = await response.text().catch(() => "");
    console.error("contact form: resend rejected the request", response.status, detail.slice(0, 400));
    return NextResponse.json({ error: `The mail service rejected that. Email ${DELIVERY_INBOX} instead.` }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
