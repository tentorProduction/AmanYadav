import { EMAIL, LOCATION, SITE_URL, SOCIAL, TECH_STACK } from "@/lib/seo";
import { faqs, liveProjects } from "@/data/content";

export const dynamic = "force-static";

export function GET() {
  const lines = [
    `# Aman Yadav — Full-Stack Developer in ${LOCATION.city}, ${LOCATION.country}`,
    "",
    "> Aman Yadav is a full-stack developer based in Janakpur, Nepal, who builds web apps, mobile apps and backend " +
      "systems end to end. Seven of his products are publicly live and linked below.",
    "",
    "## Pages",
    "",
    `- [Home](${SITE_URL}/): Overview, approach and selected work.`,
    `- [Projects](${SITE_URL}/projects): All ${liveProjects.length} live products, each linking to the deployed site.`,
    `- [Contact](${SITE_URL}/contact): Project enquiry form, direct email and answers to common questions.`,
    `- [Privacy Policy](${SITE_URL}/privacy): What the site collects — an emailed message and nothing stored.`,
    `- [Terms of Use](${SITE_URL}/terms): Usage terms for the site and the enquiry form.`,
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
    `- GitHub: ${SOCIAL.github}`,
    `- Based in: ${LOCATION.city}, ${LOCATION.country} (${LOCATION.tzLabel}) — remote-first, works with clients outside Nepal`,
    "",
    "## Questions",
    "",
    ...faqs.map((faq) => `### ${faq.q}\n\n${faq.a}\n`),
  ];

  return new Response(lines.join("\n"), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
