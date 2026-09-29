import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { EMAIL } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Page not found",
  description: "That page does not exist. Here is where everything actually lives.",
  robots: { index: false, follow: true },
  // Without this the error page advertises the home page as its canonical.
  alternates: { canonical: null },
};

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main id="main" className="page not-found">
        <p className="section-number">Error 404</p>
        <h1 className="page-title">
          <span className="title-line"><span className="title-line-inner">This page</span></span>
          <span className="title-line"><span className="title-line-inner">doesn’t exist.</span></span>
        </h1>
        <p className="page-lede">
          Either the link is stale or I moved something. Nothing was lost — everything on this site is one of these
          four places.
        </p>
        <ul className="recovery-list">
          <li><Link href="/"><span>01</span>Home<em>The portfolio, start here</em></Link></li>
          <li><Link href="/projects"><span>02</span>Projects<em>Seven live products</em></Link></li>
          <li><Link href="/contact"><span>03</span>Contact<em>Send a project brief</em></Link></li>
          <li><Link href="/privacy"><span>04</span>Privacy<em>What the site collects</em></Link></li>
        </ul>
        <p className="recovery-mail">
          Seen a broken link pointing here? Tell me at{" "}
          <a href={`mailto:${EMAIL}`}>{EMAIL}</a> and I’ll fix it.
        </p>
      </main>
    </>
  );
}
