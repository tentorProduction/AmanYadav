import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";

// The catch-all already allows these, but generative crawlers are listed
// explicitly so the intent is machine-readable and survives a future deny-by-default rule.
const ANSWER_ENGINES = [
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "ClaudeBot",
  "Claude-User",
  "anthropic-ai",
  "PerplexityBot",
  "Perplexity-User",
  "Google-Extended",
  "Applebot-Extended",
  "Amazonbot",
  "DuckAssistBot",
  "YouBot",
  "CCBot",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/", disallow: ["/api/"] },
      ...ANSWER_ENGINES.map((userAgent) => ({ userAgent, allow: "/", disallow: ["/api/"] })),
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
