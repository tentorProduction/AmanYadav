import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { ContactFooter } from "@/components/ContactFooter";
import { JsonLd } from "@/components/JsonLd";
import { EMAIL, SITE_TITLE, SITE_URL, UPDATED, breadcrumbs } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Terms of Use",
  description:
    "The terms for using amanyadav.dev: what the site is for, what you can do with its content, and the limits around the contact form.",
  alternates: { canonical: "/terms" },
  openGraph: {
    type: "website",
    url: `${SITE_URL}/terms`,
    title: "Terms of Use — Aman Yadav",
    description: "Plain-language terms for browsing amanyadav.dev and sending a project brief.",
  },
};

const LEGAL_JSONLD = [
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${SITE_URL}/terms#webpage`,
    url: `${SITE_URL}/terms`,
    name: "Terms of Use — Aman Yadav",
    description: "Terms governing use of amanyadav.dev and its contact form.",
    inLanguage: "en",
    isPartOf: { "@id": `${SITE_URL}/#website` },
    about: { "@id": `${SITE_URL}/#person` },
    dateModified: UPDATED.terms,
  },
  breadcrumbs([
    { name: "Home", href: "/" },
    { name: "Terms", href: "/terms" },
  ]),
];

const sections = [
  {
    id: "scope",
    title: "What this site is",
    body: [
      <>
        A portfolio. It exists to show work and to let you start a conversation. Nothing on it is an offer, a quote,
        or a contract — a project agreement only exists once we have both signed something that says so. Sending a
        message through the contact form does not create any obligation on either side.
      </>,
    ],
  },
  {
    id: "content",
    title: "Using the content",
    body: [
      <>
        The writing, layout and code on this site are mine unless credited otherwise. You may link to any page, and
        you may quote a short passage with attribution. You may not republish the site as your own portfolio, scrape
        it in bulk to train a model, or lift the project names and claims to market something you built.
      </>,
      <>
        Screenshots and product names for the seven listed projects belong to those products. They appear here as
        accurate descriptions of work I built, which is nominative use — not an endorsement by any of them.
      </>,
    ],
  },
  {
    id: "acceptable-use",
    title: "Acceptable use of the form",
    body: [
      <>
        One honest message per enquiry. Do not use it to send unlawful, harassing or impersonating content, to test
        whether you can break the endpoint, or to submit other people’s details without their knowledge. Submissions
        are rate-limited per IP, hidden-field trapped against bots, and logged only as request metadata. Abuse gets
        your address blocked.
      </>,
    ],
  },
  {
    id: "external",
    title: "Links out",
    body: [
      <>
        Every project card opens a site I do not control. Once you leave here, their terms and privacy policy apply,
        and I am not responsible for what they change, charge, or break.
      </>,
    ],
  },
  {
    id: "warranty",
    title: "No warranty, and the limit",
    body: [
      <>
        The site is provided as it is. I try to keep it up, but I do not promise it will be available, error-free, or
        suitable for anything. To the widest extent the law allows, I am not liable for indirect or consequential
        loss from using this site. That liability cap is the fees you have paid me for the work in question, which
        for a visitor who never hired me is nothing.
      </>,
    ],
  },
  {
    id: "law",
    title: "Changes and governing law",
    body: [
      <>
        I update these terms when the site changes and will move the date below when I do. Continued use after an
        update means you accept it. This site is operated by Aman Yadav from Janakpur, Nepal. These terms are governed
        by the laws of Nepal, and the courts where I am based have jurisdiction. If one clause falls, the rest stand.
      </>,
    ],
  },
];

export default function TermsPage() {
  return (
    <>
      <JsonLd data={LEGAL_JSONLD} />
      <Navbar />
      <main id="main" className="page legal">
        <section className="page-head">
          <p className="section-number">Legal / Terms</p>
          <h1 className="page-title">Terms of Use</h1>
          <p className="page-lede">
            Short enough to read, specific enough to mean something. Not legal advice — if we end up working together,
            the contract we sign outranks this page. Last updated {UPDATED.terms}.
          </p>
        </section>

        <nav className="legal-toc" aria-label="On this page">
          {sections.map((section) => (
            <a key={section.id} href={`#${section.id}`}>{section.title}</a>
          ))}
        </nav>

        {sections.map((section) => (
          <section className="legal-section" id={section.id} key={section.id}>
            <h2>{section.title}</h2>
            {section.body.map((paragraph, index) => <p key={index}>{paragraph}</p>)}
          </section>
        ))}

        <section className="legal-note">
          <p>
            Questions about either legal page: <a href={`mailto:${EMAIL}`}>{EMAIL}</a>. See also the{" "}
            <Link href="/privacy">privacy policy</Link>.
          </p>
        </section>

        <section className="page-cta">
          <h2>Ready to talk about a project?</h2>
          <Link className="contact-button" href="/contact">Start a conversation <span>→</span></Link>
        </section>
      </main>
      <ContactFooter />
    </>
  );
}
