import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { StatementSection } from "@/components/StatementSection";
import { RecentWork } from "@/components/RecentWork";
import { KeyFigures } from "@/components/KeyFigures";
import { Testimonial } from "@/components/Testimonial";
import { ContactFooter } from "@/components/ContactFooter";
import { MotionController } from "@/components/MotionController";
import { JsonLd } from "@/components/JsonLd";
import { HOME_DESCRIPTION, HOME_TITLE, SITE_TITLE, SITE_URL, UPDATED } from "@/lib/seo";

export const metadata: Metadata = {
  title: HOME_TITLE,
  description: HOME_DESCRIPTION,
  alternates: { canonical: "/" },
  openGraph: { url: SITE_URL, title: HOME_TITLE, description: HOME_DESCRIPTION },
};

const WEBPAGE_JSONLD = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${SITE_URL}/#webpage`,
  url: SITE_URL,
  name: SITE_TITLE,
  description: HOME_DESCRIPTION,
  inLanguage: "en",
  isPartOf: { "@id": `${SITE_URL}/#website` },
  about: { "@id": `${SITE_URL}/#person` },
  dateModified: UPDATED.home,
  speakable: {
    "@type": "SpeakableSpecification",
    cssSelector: [".statement-copy", ".statement-loc", ".statement-note"],
  },
};

export default function Home() {
  return (
    <>
      <JsonLd data={WEBPAGE_JSONLD} />
      <MotionController />
      <Navbar />
      <main id="main">
        <Hero />
        <Marquee />
        <StatementSection />
        <RecentWork />
        <KeyFigures />
        <Testimonial />
      </main>
      <ContactFooter />
    </>
  );
}
