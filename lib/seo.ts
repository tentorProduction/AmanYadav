export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://amanyadav.dev";
export const SITE_NAME = "Aman Yadav";
export const SITE_TITLE = "Aman Yadav — Full-Stack Developer";
export const EMAIL = "hello@amanyadav.dev";

export const HOME_TITLE = SITE_TITLE;
export const HOME_DESCRIPTION =
  "Aman Yadav builds distinctive, useful digital products across web, mobile, backend and systems. Seven live products, from AI video captions to browser games.";

// Stable per-page content dates. Using a build timestamp would tell crawlers
// everything changed on every deploy, which devalues lastmod.
export const UPDATED = {
  home: "2026-09-28",
  projects: "2026-09-28",
  contact: "2026-09-28",
} as const;

export const TECH_STACK = [
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Tailwind CSS",
  "three.js / WebGL",
  "Kotlin",
  "Android",
  "GSAP",
  "REST APIs",
];

export function breadcrumbs(trail: { name: string; href: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.name,
      item: `${SITE_URL}${crumb.href}`,
    })),
  };
}
