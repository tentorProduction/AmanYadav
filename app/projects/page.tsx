import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { ContactFooter } from "@/components/ContactFooter";
import { liveProjects } from "@/data/content";
import { SITE_URL, UPDATED, breadcrumbs } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Seven live products built and shipped by Aman Yadav, a full-stack developer in Janakpur, Nepal — CapGen AI captions, Smash Ground 3D, CinemaVortex, YapPDF, QR Maker, Vanya Gaming Cafe and ArrowRusher Way.",
  alternates: { canonical: "/projects" },
  openGraph: {
    type: "website",
    url: `${SITE_URL}/projects`,
    title: "Projects — 7 Live Builds by Aman Yadav",
    description:
      "CapGen, Smash Ground 3D, CinemaVortex, YapPDF, QR Maker, Vanya Gaming Cafe and ArrowRusher Way — all live, all built by Aman Yadav from Janakpur, Nepal.",
  },
};

const PROJECTS_JSONLD = [
  {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${SITE_URL}/projects#webpage`,
    url: `${SITE_URL}/projects`,
    name: "Projects — 7 Live Builds by Aman Yadav",
    description: "Every product Aman Yadav has built and shipped that is publicly live — designed, coded and deployed from Janakpur, Nepal.",
    inLanguage: "en",
    isPartOf: { "@id": `${SITE_URL}/#website` },
    about: { "@id": `${SITE_URL}/#person` },
    dateModified: UPDATED.projects,
  },
  {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Live projects by Aman Yadav",
    numberOfItems: liveProjects.length,
    itemListOrder: "https://schema.org/ItemListUnordered",
    itemListElement: liveProjects.map((project, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "SoftwareApplication",
        name: project.name,
        url: project.url,
        applicationCategory: project.schemaCategory,
        operatingSystem: project.operatingSystem,
        description: project.blurb,
        creator: { "@id": `${SITE_URL}/#person` },
      },
    })),
  },
  breadcrumbs([
    { name: "Home", href: "/" },
    { name: "Projects", href: "/projects" },
  ]),
];

export default function ProjectsPage() {
  return (
    <>
      <JsonLd data={PROJECTS_JSONLD} />
      <Navbar />
      <main id="main" className="page">
        <section className="page-head">
          <p className="section-number">Portfolio / Live builds</p>
          <h1 className="page-title">
            <span className="title-line"><span className="title-line-inner">Things I’ve</span></span>
            <span className="title-line"><span className="title-line-inner">built and shipped.</span></span>
          </h1>
          <p className="page-lede">
            Seven products that are live right now — web apps, browser and mobile games, and small tools people
            actually use. Every card opens the real site.
          </p>
        </section>

        <section className="projects-grid" aria-label="Projects">
          {liveProjects.map((project, index) => (
            <a
              key={project.url}
              className={`project-card ${project.tone}`}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="project-card-top">
                <span className="project-card-index">{String(index + 1).padStart(2, "0")}</span>
                <span className="project-card-arrow" aria-hidden="true">↗</span>
              </div>
              <h2 className="project-card-name">{project.name}</h2>
              <p className="project-card-blurb">{project.blurb}</p>
              <div className="project-card-foot">
                <span className="project-card-host">{project.host}</span>
                <span className="project-card-tags">{project.tags}</span>
              </div>
            </a>
          ))}
        </section>

        <section className="page-cta">
          <h2>Want something like this built?</h2>
          <Link className="contact-button" href="/contact">Start a conversation <span>→</span></Link>
        </section>
      </main>
      <ContactFooter />
    </>
  );
}
