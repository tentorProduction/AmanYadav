"use client";

import { useState } from "react";
import Link from "next/link";

type Status = "idle" | "sending" | "ok" | "error";

const topics = ["Web app", "Mobile app", "Website / landing page", "Something else"];

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  const sending = status === "sending";

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    const form = event.currentTarget;
    event.preventDefault();

    const fields = Object.fromEntries(new FormData(form).entries());
    // Honeypot: a filled hidden field means a bot, so pretend it worked.
    if (String(fields.company || "").trim()) {
      setStatus("ok");
      form.reset();
      return;
    }

    // noValidate turns off the native bubbles, so run the same constraints by hand
    // and move focus to the field that failed.
    if (!form.checkValidity()) {
      const invalid = form.querySelector<HTMLElement>(":invalid");
      invalid?.focus();
      setStatus("error");
      setError("Please add your name, a valid email address, and a line or two about the project.");
      return;
    }

    setStatus("sending");
    setError(null);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(fields),
      });
      const body = await response.json().catch(() => ({}));
      if (!response.ok) {
        throw new Error(
          typeof body.error === "string"
            ? body.error
            : "Could not send your message right now. Email hello@amanyadav.dev and I’ll reply.",
        );
      }
      setStatus("ok");
      form.reset();
    } catch (cause) {
      setStatus("error");
      setError(cause instanceof Error ? cause.message : "Could not send your message right now.");
    }
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <div className="field-row">
        <div className="field">
          <label htmlFor="name">Your name</label>
          <input id="name" name="name" type="text" autoComplete="name" required placeholder="Aman Yadav" />
        </div>
        <div className="field">
          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" autoComplete="email" required placeholder="you@company.com" />
        </div>
      </div>

      <fieldset className="field">
        <legend>What do you need?</legend>
        <div className="chip-group">
          {topics.map((topic, index) => (
            <label className="chip" key={topic}>
              <input type="radio" name="topic" value={topic} defaultChecked={index === 0} required />
              <span>{topic}</span>
            </label>
          ))}
        </div>
      </fieldset>

      <div className="field">
        <label htmlFor="message">Project details</label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          minLength={12}
          placeholder="What are you building, and what does done look like?"
        />
      </div>

      <div className="hp-field" aria-hidden="true">
        <label htmlFor="company">Company</label>
        <input id="company" name="company" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="form-foot">
        <button className="submit-button" type="submit" disabled={sending}>
          {sending ? "Sending…" : "Send message"} <span aria-hidden="true">→</span>
        </button>
        <p className={`form-status ${status}`} role="status" aria-live="polite" id="form-status">
          {status === "ok" && "Thanks — your message is on its way. I usually reply within a day."}
          {status === "error" && error}
        </p>
      </div>

      <p className="form-consent">
        Sending this emails me your name, address and message — that is all this site keeps. See the{" "}
        <Link href="/privacy">privacy policy</Link>.
      </p>
    </form>
  );
}
