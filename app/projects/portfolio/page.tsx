import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { ContactFooter } from "@/components/ContactFooter";
import { JsonLd } from "@/components/JsonLd";
import { SITE_URL, SOCIAL_IMAGE, UPDATED, breadcrumbs } from "@/lib/seo";

const path = "/projects/portfolio";
const title = "Building a Next.js Portfolio with Three.js | Aman Yadav";
const description = "Inside Aman Yadav’s portfolio: static Next.js pages, an interactive Three.js sculpture, accessible motion, locally served fonts and a validated contact API.";

export const metadata: Metadata = {
  title: { absolute: title }, description,
  alternates: { canonical: path },
  openGraph: { type: "article", title, description, url: `${SITE_URL}${path}`, images: [SOCIAL_IMAGE], authors: [SITE_URL] },
  twitter: { card: "summary_large_image", title, description, images: [SOCIAL_IMAGE.url] },
};

export default function PortfolioCaseStudy() {
  return <>
    <JsonLd data={[
      { "@context": "https://schema.org", "@type": "Article", "@id": `${SITE_URL}${path}#article`, headline: title, description, url: `${SITE_URL}${path}`, mainEntityOfPage: `${SITE_URL}${path}`, author: { "@id": `${SITE_URL}/#person` }, publisher: { "@id": `${SITE_URL}/#person` }, image: SOCIAL_IMAGE.url, datePublished: UPDATED.portfolio, dateModified: UPDATED.portfolio, inLanguage: "en" },
      breadcrumbs([{ name: "Home", href: "/" }, { name: "Projects", href: "/projects" }, { name: "Portfolio build", href: path }]),
    ]}/>
    <Navbar />
    <main id="main" className="page legal">
      <header className="page-head">
        <nav aria-label="Breadcrumb"><Link href="/">Home</Link> / <Link href="/projects">Projects</Link> / Portfolio build</nav>
        <p className="section-number">Implementation notes / Aman Yadav</p>
        <h1 className="page-title">Building this<br/>Next.js portfolio.</h1>
        <p className="page-lede">A look at the code behind amanyadav.dev: an editorial portfolio with a chrome WebGL sculpture, static content pages and a small contact API. Built by Aman Yadav in Janakpur, Nepal.</p>
      </header>
      <article aria-label="Portfolio implementation case study">
        <section className="legal-section">
          <h2>The design and the engineering problem</h2>
          <p>The page combines oversized serif headings, a cream background, a curved black statement section and a lime footer. The interactive centerpiece needs a browser and a graphics context, but the introduction, project links and contact information should be readable before that scene finishes loading.</p>
          <p>The implementation uses Next.js App Router, TypeScript and reusable React components. The homepage, project collection, contact information and legal pages are generated as HTML. Interactive components handle the project preview and contact form. A Node.js route processes contact requests.</p>
        </section>
        <section className="legal-section">
          <h2>Keeping Three.js separate from the page content</h2>
          <p>The hero dynamically imports its graphics component with server rendering disabled for that component. The surrounding heading and page content still appear in the server response. React Three Fiber manages the canvas, while Drei supplies the distorted material, studio environment and contact shadow.</p>
          <p>The sculpture combines a subtly deformed icosahedron with three torus rings. A metallic material reflects the studio environment, and damped pointer input adjusts the group’s rotation. These are actual meshes rendered through WebGL, rather than a pre-recorded video.</p>
        </section>
        <section className="legal-section">
          <h2>Putting limits on the animation</h2>
          <p>An IntersectionObserver pauses the canvas frame loop when the scene leaves the viewport. Device pixel ratio is capped at 1.25, the sphere uses reduced mesh detail, and the contact shadow is captured once instead of recomputed continuously. These choices reduce ongoing graphics work; they do not establish a measured frame rate for every device.</p>
          <p>The component subscribes to the browser’s reduced-motion preference. In that mode, floating and material motion stop and the canvas uses on-demand rendering. A static fallback is provided for browsers that cannot create the graphics context. GSAP controls the page’s section reveals and checks the same motion preference.</p>
        </section>
        <section className="legal-section">
          <h2>A small contact endpoint with clear boundaries</h2>
          <p>The form sends name, email, topic and message fields to a Next.js route. Server-side validation checks required fields, the email format and minimum message length. Inputs have bounded lengths, and text is escaped before it is inserted into an HTML email. The endpoint uses Resend for delivery.</p>
          <p>A hidden honeypot and an in-memory rate limiter provide basic abuse controls. The limiter is process-local: it is not a shared limit across serverless instances. Client validation focuses the first invalid field, and status messages are associated with the inputs. The privacy page explains the message handling; no visitor database or analytics tracker is required for the portfolio.</p>
        </section>
        <section className="legal-section">
          <h2>Making the content discoverable</h2>
          <p>Every public page has its own title, description and canonical URL. Metadata, sitemap entries and structured data use the www hostname that the production domain redirects to. Person, WebSite and breadcrumb data describe the visible identity and navigation without adding invented ratings or credentials.</p>
          <p>The same display and handwriting fonts are bundled with next/font and served locally. A dependency-free check requests production HTML and verifies titles, canonicals, descriptions, one H1 per page, social images, JSON-LD syntax and internal links. These checks catch implementation errors; Google still decides which URLs and queries appear in search.</p>
        </section>
      </article>
      <section className="page-cta"><h2>Explore the finished work.</h2><Link href="/projects" className="contact-button">Back to projects <span aria-hidden="true">→</span></Link></section>
    </main>
    <ContactFooter />
  </>;
}
