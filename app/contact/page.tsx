import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { ContactForm } from "@/components/ContactForm";
import { ContactFooter } from "@/components/ContactFooter";
import { JsonLd } from "@/components/JsonLd";
import { faqs } from "@/data/content";
import { EMAIL, LOCATION, SITE_URL, SOCIAL, UPDATED, breadcrumbs } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Hire Aman Yadav, a full-stack developer based in Janakpur, Nepal, building web apps, mobile apps and backend systems. Send a project brief and get a reply within a day.",
  alternates: { canonical: "/contact" },
  openGraph: {
    type: "website",
    url: `${SITE_URL}/contact`,
    title: "Contact Aman Yadav — Full-Stack Developer in Janakpur, Nepal",
    description:
      "Tell me what you're building and what done looks like. Replies usually land within a day.",
  },
};

const CONTACT_JSONLD = [
  {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "@id": `${SITE_URL}/contact#webpage`,
    url: `${SITE_URL}/contact`,
    name: "Contact Aman Yadav — Full-Stack Developer in Janakpur, Nepal",
    description: `Send a project brief to Aman Yadav in ${LOCATION.city}, ${LOCATION.country}, or email ${EMAIL} directly.`,
    inLanguage: "en",
    isPartOf: { "@id": `${SITE_URL}/#website` },
    about: { "@id": `${SITE_URL}/#person` },
    dateModified: UPDATED.contact,
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  },
  breadcrumbs([
    { name: "Home", href: "/" },
    { name: "Contact", href: "/contact" },
  ]),
];

export default function ContactPage() {
  return (
    <>
      <JsonLd data={CONTACT_JSONLD} />
      <Navbar />
      <main id="main" className="page">
        <section className="page-head">
          <p className="section-number">Contact / Say hello</p>
          <h1 className="page-title">
            <span className="title-line"><span className="title-line-inner">Let’s build</span></span>
            <span className="title-line"><span className="title-line-inner">something real.</span></span>
          </h1>
          <p className="page-lede">
            Tell me what you’re working on and what “done” looks like. If email suits you better, it’s {EMAIL}.
          </p>
        </section>

        <section className="contact-layout">
          <ContactForm />
          <aside className="contact-side" aria-label="Other ways to reach me">
            <div className="side-block">
              <p className="side-label">Direct email</p>
              <a className="side-value" href={`mailto:${EMAIL}`}>{EMAIL}</a>
            </div>
            <div className="side-block">
              <p className="side-label">Based in</p>
              <p className="side-value">{LOCATION.city}, {LOCATION.country} · {LOCATION.tzLabel}</p>
            </div>
            <div className="side-block">
              <p className="side-label">Reply time</p>
              <p className="side-value">Usually within a day</p>
            </div>
            <div className="side-block">
              <p className="side-label">Good fits</p>
              <p className="side-value">Web apps · Mobile apps · Backend &amp; APIs · Prototypes to production</p>
            </div>
            <div className="side-block">
              <p className="side-label">Elsewhere</p>
              <p className="side-value socials">
                <a href={SOCIAL.github} rel="noopener noreferrer">GitHub</a>
                <Link href="/privacy">Privacy</Link>
              </p>
            </div>
          </aside>
        </section>

        <section className="faq" aria-labelledby="faq-heading">
          <p className="section-number">Before you write</p>
          <h2 id="faq-heading" className="faq-heading">Questions that come up a lot</h2>
          <dl className="faq-list">
            {faqs.map((faq) => (
              <div className="faq-item" key={faq.q}>
                <dt>{faq.q}</dt>
                <dd>{faq.a}</dd>
              </div>
            ))}
          </dl>
        </section>
      </main>
      <ContactFooter />
    </>
  );
}
