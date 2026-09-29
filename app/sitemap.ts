import type { MetadataRoute } from "next";
import { SITE_URL, UPDATED } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${SITE_URL}/`, lastModified: UPDATED.home, changeFrequency: "monthly", priority: 1 },
    { url: `${SITE_URL}/projects`, lastModified: UPDATED.projects, changeFrequency: "weekly", priority: 0.9 },
    { url: `${SITE_URL}/contact`, lastModified: UPDATED.contact, changeFrequency: "yearly", priority: 0.8 },
    { url: `${SITE_URL}/privacy`, lastModified: UPDATED.privacy, changeFrequency: "yearly", priority: 0.3 },
    { url: `${SITE_URL}/terms`, lastModified: UPDATED.terms, changeFrequency: "yearly", priority: 0.3 },
  ];
}
