"use client";
import { useState } from "react";
import Link from "next/link";
import { liveProjects, projects } from "@/data/content";

function Preview({ tone, name }: { tone: string; name: string }) { return <div className={`project-preview ${tone}`} aria-hidden="true"><div className="mock-browser"><div className="mock-top"><i/><i/><i/></div><div className="mock-content"><small>{name}</small><strong>{name === "CapGen" ? "Create captions that stop the scroll." : "Built for useful outcomes."}</strong><span/></div></div></div>; }

export function RecentWork() {
  const [active, setActive] = useState(0);
  return <section className="work-section" id="work"><div className="work-heading"><p className="section-number">02 / Selected</p><h2>Recent work</h2><Preview tone={projects[active].tone} name={projects[active].name}/></div><div className="project-list">{projects.map((project, index) => <a href="#contact" className="project-row" key={project.id} onMouseEnter={() => setActive(index)} onFocus={() => setActive(index)}><span className="project-id">{project.id}</span><span className="project-name">{project.name}</span><span className="project-tags">{project.tags}</span><span className="project-arrow" aria-hidden="true">↗</span></a>)}<Link href="/projects" className="project-list-more">See all {liveProjects.length} live projects <span aria-hidden="true">→</span></Link></div></section>;
}
