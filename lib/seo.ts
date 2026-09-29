export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://amanyadav.dev";
export const SITE_NAME = "Aman Yadav";
export const SITE_TITLE = "Aman Yadav — Full-Stack Developer in Janakpur, Nepal";
export const EMAIL = "hello@amanyadav.dev";

// What the entity is called in the wild. Used for schema alternateName so
// "amanyadav" as one word resolves to this person, not a homonym.
export const PERSON_NAME = "Aman Yadav";
export const ALT_NAME = "amanyadav";

export const LOCATION = {
  city: "Janakpur",
  region: "Madhesh",
  country: "Nepal",
  countryCode: "NP",
  tzLabel: "UTC+5:45",
  tz: "Asia/Kathmandu",
};

export const HOME_TITLE = SITE_TITLE;
export const HOME_DESCRIPTION =
  "Aman Yadav is a full-stack developer based in Janakpur, Nepal, building web apps, Android apps and backend systems end to end. Seven live products, from AI video captions to browser games.";

// Stable per-page content dates. Using a build timestamp would tell crawlers
// everything changed on every deploy, which devalues lastmod.
export const UPDATED = {
  home: "2026-09-30",
  projects: "2026-09-30",
  contact: "2026-09-30",
  privacy: "2026-09-30",
  terms: "2026-09-30",
} as const;

// Only links that are verified to exist. Add LinkedIn here once a real profile
// URL is known — placeholder domains would ship as dead links.
export const SOCIAL = {
  github: "https://github.com/tentorProduction",
};

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
