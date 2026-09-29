import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { ContactFooter } from "@/components/ContactFooter";
import { JsonLd } from "@/components/JsonLd";
import { EMAIL, SITE_TITLE, SITE_URL, UPDATED, breadcrumbs } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "What amanyadav.dev collects: contact-form messages sent by email, optional consented analytics, and nothing else. No trackers, no cookies before you agree.",
  alternates: { canonical: "/privacy" },
  openGraph: {
    type: "website",
    url: `${SITE_URL}/privacy`,
    title: "Privacy Policy — Aman Yadav",
    description:
      "The contact form sends an email and stores nothing. Analytics only run after you choose to allow them.",
  },
};

const LEGAL_JSONLD = [
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${SITE_URL}/privacy#webpage`,
    url: `${SITE_URL}/privacy`,
    name: "Privacy Policy — Aman Yadav",
    description: "How amanyadav.dev handles the data the contact form and analytics touch.",
    inLanguage: "en",
    isPartOf: { "@id": `${SITE_URL}/#website` },
    about: { "@id": `${SITE_URL}/#person` },
    dateModified: UPDATED.privacy,
  },
  breadcrumbs([
    { name: "Home", href: "/" },
    { name: "Privacy", href: "/privacy" },
  ]),
];

const sections = [
  {
    id: "collected",
    title: "What I actually collect",
    body: [
      <>
        When you submit the contact form, the message is sent to <code>/api/contact</code>, which forwards it as an
        email through Resend (the sending provider) to me. The fields are your name, your email address, the topic you
        pick, and what you wrote. Your email address is used as the reply-to so you can answer from your inbox.
      </>,
      <>
        That is the whole list. This site has no database, no user accounts, no sign-up, no comments, and no
        newsletter. Submitted messages are not written to storage by the site — they live in my mailbox, and I keep
        them only as long as it takes to reply and wrap up the conversation.
      </>,
    ],
  },
  {
    id: "server-data",
    title: "Data that reaches a server anyway",
    body: [
      <>
        Two things are unavoidable once a page loads over the internet. The hosting platform (Vercel) sees each
        request, including the IP address, user agent and referrer, and keeps short-lived request logs for
        operating the service. My API route also reads your IP to rate-limit form submissions — five per minute,
        held in memory only, so it disappears when the function instance stops.
      </>,
      <>
        The stylesheet pulls three webfonts from Google Fonts, which means your browser makes a request to Google and
        Google sees your IP address as part of serving that file. If you block <code>fonts.googleapis.com</code>, the
        site still renders with the fallback fonts.
      </>,
      <>
        The 3D object on the home page loads one lighting asset from <code>raw.githack.com</code>, a CDN the three.js
        community uses. It is a file request, not a script that reads your browser, and it happens only while that
        scene is on screen. Blocking it leaves the page working; the object simply renders without its reflections.
      </>,
    ],
  },
  {
    id: "analytics",
    title: "Analytics, and the consent choice",
    body: [
      <>
        Traffic measurement is off until you say otherwise. If you click “Allow analytics”, the page loads Vercel Web
        Analytics and Speed Insights, which record aggregate page views and timing numbers. They are first-party and
        cookieless, so they do not build a cross-site profile of you. Your choice is remembered in your browser’s
        local storage under <code>amanyadav.analytics-consent</code>, and nothing is sent before you choose.
      </>,
      <>
        “Essential only” keeps the site exactly as it is now: no analytics scripts are fetched at all. You can change
        your mind by clearing site data, and I will happily add a visible switch if you email me and ask.
      </>,
    ],
  },
  {
    id: "sharing",
    title: "Who else sees it",
    body: [
      <>
        Nobody buys or sells data here. The providers named above — Resend for email delivery, Vercel for hosting and
        optional analytics, Google for fonts — process it on their side under their own policies. I do not run
        advertising pixels, and I do not share your message with anyone else unless you hire me and the work pulls in
        a contractor or a client you already know about.
      </>,
    ],
  },
  {
    id: "rights",
    title: "Your choices",
    body: [
      <>
        Ask me at {EMAIL} and I will tell you what I hold about you, correct it, or delete it — including any email
        you sent through the form. The same address works to withdraw consent or to complain. If you are in the EEA or
        UK you also have the right to lodge a complaint with your data protection authority; in Nepal the Individual
        Privacy Act, 2075 (2018) governs personal data and gives you the right to ask what is held about you and have
        it corrected.
      </>,
    ],
  },
  {
    id: "children",
    title: "Children",
    body: [
      <>
        This site is written for adults hiring a developer and is not directed at children. I do not knowingly gather
        information from anyone under sixteen; if that happens, email me and it gets deleted.
      </>,
    ],
  },
];

export default function PrivacyPage() {
  return (
    <>
      <JsonLd data={LEGAL_JSONLD} />
      <Navbar />
      <main id="main" className="page legal">
        <section className="page-head">
          <p className="section-number">Legal / Privacy</p>
          <h1 className="page-title">Privacy Policy</h1>
          <p className="page-lede">
            Written for this site specifically, not pasted from a generator. It describes what the code in this
            repository really does. I am the data controller for everything collected here, working from Janakpur,
            Nepal. Last updated {UPDATED.privacy}.
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

        <section className="page-cta">
          <h2>Something here look wrong?</h2>
          <Link className="contact-button" href="/contact">Tell me about it <span>→</span></Link>
        </section>
      </main>
      <ContactFooter />
    </>
  );
}
