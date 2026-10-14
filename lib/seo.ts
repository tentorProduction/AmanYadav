// Production identity must match the hostname that the deployed apex redirects to.
export const SITE_URL = "https://www.amanyadav.dev";
export const SITE_NAME = "Aman Yadav";
export const SITE_TITLE = "Aman Yadav — Full-Stack Developer in Janakpur, Nepal";
export const EMAIL = "hello@amanyadav.dev";
export const SOCIAL_IMAGE = { url: `${SITE_URL}/opengraph-image`, width: 1200, height: 630, alt: "Aman Yadav — Full-Stack Developer in Janakpur, Nepal" };

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

export const HOME_TITLE = "Aman Yadav | Full-Stack Web & Android Developer in Nepal";
export const HOME_DESCRIPTION =
  "Explore Aman Yadav’s portfolio: a full-stack developer in Janakpur, Nepal, building web applications, Android apps and backend systems.";

// Stable per-page content dates. Using a build timestamp would tell crawlers
// everything changed on every deploy, which devalues lastmod.
export const UPDATED = {
  home: "2026-10-14",
  projects: "2026-10-14",
  contact: "2026-10-14",
  privacy: "2026-10-14",
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
