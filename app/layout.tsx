import type { Metadata, Viewport } from "next";
import "./globals.css";
import { ALT_NAME, EMAIL, HOME_DESCRIPTION, HOME_TITLE, LOCATION, PERSON_NAME, SITE_NAME, SITE_TITLE, SITE_URL, SOCIAL, TECH_STACK } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { AnalyticsProvider } from "@/components/AnalyticsProvider";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: HOME_TITLE,
    template: `%s — Aman Yadav`,
  },
  description: HOME_DESCRIPTION,
  keywords: [
    "Aman Yadav",
    "amanyadav",
    "Aman Yadav Janakpur",
    "Aman Yadav Nepal",
    "full-stack developer Nepal",
    "web developer Janakpur",
    "Next.js developer",
    "React developer",
    "TypeScript",
    "Android app developer",
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
  name: PERSON_NAME,
  alternateName: ALT_NAME,
  url: SITE_URL,
  email: EMAIL,
  image: `${SITE_URL}/opengraph-image`,
  jobTitle: "Full-Stack Developer",
  description: HOME_DESCRIPTION,
  address: {
    "@type": "PostalAddress",
    addressLocality: LOCATION.city,
    addressRegion: LOCATION.region,
    addressCountry: LOCATION.countryCode,
  },
  knowsAbout: TECH_STACK,
  sameAs: [SOCIAL.github],
  contactPoint: { "@type": "ContactPoint", email: EMAIL, contactType: "customer service", availableLanguage: "English" },
};

const WEBSITE_JSONLD = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: SITE_URL,
  name: SITE_TITLE,
  alternateName: "amanyadav.dev",
  description: HOME_DESCRIPTION,
  inLanguage: "en",
  publisher: { "@id": `${SITE_URL}/#person` },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://raw.githack.com" />
        <JsonLd data={[PERSON_JSONLD, WEBSITE_JSONLD]} />
      </head>
      <body className="min-h-dvh antialiased">
        <a className="skip-link" href="#main">Skip to content</a>
        {children}
        <AnalyticsProvider />
      </body>
    </html>
  );
}
