import type { Metadata, Viewport } from "next";
import "./globals.css";
import { EMAIL, HOME_DESCRIPTION, HOME_TITLE, SITE_NAME, SITE_TITLE, SITE_URL, TECH_STACK } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: HOME_TITLE,
    template: `%s — Aman Yadav`,
  },
  description: HOME_DESCRIPTION,
  keywords: [
    "Aman Yadav",
    "full-stack developer",
    "Next.js developer",
    "React developer",
    "TypeScript",
    "web apps",
    "mobile apps",
    "Kotlin",
    "Freelance developer portfolio",
  ],
  applicationName: SITE_NAME,
  authors: [{ name: "Aman Yadav", url: SITE_URL }],
  creator: "Aman Yadav",
  publisher: "Aman Yadav",
  category: "technology",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "Aman Yadav — Full-Stack Developer",
    title: HOME_TITLE,
    description: HOME_DESCRIPTION,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: HOME_TITLE,
    description: HOME_DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  formatDetection: { email: false, address: false, telephone: false },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f2f0e8",
  colorScheme: "light",
};

const PERSON_JSONLD = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${SITE_URL}/#person`,
  name: "Aman Yadav",
  url: SITE_URL,
  email: EMAIL,
  jobTitle: "Full-Stack Developer",
  description: HOME_DESCRIPTION,
  knowsAbout: TECH_STACK,
  contactPoint: { "@type": "ContactPoint", email: EMAIL, contactType: "customer service" },
};

const WEBSITE_JSONLD = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: SITE_URL,
  name: SITE_TITLE,
  description: HOME_DESCRIPTION,
  inLanguage: "en",
  publisher: { "@id": `${SITE_URL}/#person` },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <JsonLd data={[PERSON_JSONLD, WEBSITE_JSONLD]} />
      </head>
      <body className="min-h-dvh antialiased">{children}</body>
    </html>
  );
}
