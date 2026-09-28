import { EMAIL, SITE_URL, TECH_STACK } from "@/lib/seo";
import { faqs, liveProjects } from "@/data/content";

export const dynamic = "force-static";

export function GET() {
  const lines = [
    "# Aman Yadav — Full-Stack Developer",
    "",
    "> Aman Yadav is a full-stack developer who builds web apps, mobile apps and backend systems end to end. " +
      "Seven of his products are publicly live and linked below.",
    "",
    "## Pages",
    "",
    `- [Home](${SITE_URL}/): Overview, approach and selected work.`,
    `- [Projects](${SITE_URL}/projects): All ${liveProjects.length} live products, each linking to the deployed site.`,
    `- [Contact](${SITE_URL}/contact): Project enquiry form, direct email and answers to common questions.`,
    "",
    "## Live products",
    "",
    ...liveProjects.map((project) => `- [${project.name}](${project.url}): ${project.blurb} (${project.tags}; runs on ${project.operatingSystem}.)`),
    "",
    "## Tech stack",
    "",
    `- ${TECH_STACK.join(", ")}`,
    "",
    "## Contact",
    "",
    `- Email: ${EMAIL}`,
    `- Form: ${SITE_URL}/contact`,
    "",
    "## Questions",
    "",
    ...faqs.map((faq) => `### ${faq.q}\n\n${faq.a}\n`),
  ];

  return new Response(lines.join("\n"), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
