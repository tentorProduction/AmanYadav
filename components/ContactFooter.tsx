import Link from "next/link";
import { Logo } from "@/components/Logo";
import { EMAIL, LOCATION, PERSON_NAME, SOCIAL } from "@/lib/seo";

// Static pages bake this at build time, so anchor it to the audience's clock rather than the build host's UTC.
const YEAR = new Intl.DateTimeFormat("en", { timeZone: LOCATION.tz, year: "numeric" }).format(new Date());

export function ContactFooter() { return <footer className="contact-footer" id="contact"><div className="footer-giant" aria-hidden="true">Aman</div><p className="section-number">05 / Say hello</p><h2>Great things can happen<br/>with a simple <em>“hello.”</em></h2><Link className="contact-button" href="/contact">Let’s work together <span>→</span></Link><nav className="footer-bottom" aria-label="Footer"><div><strong className="wordmark"><Logo size={34}/></strong><span>Full-Stack Developer</span></div><div className="footer-links"><a href={SOCIAL.github} rel="noopener noreferrer">GitHub</a><a href={`mailto:${EMAIL}`}>Email</a><Link href="/projects">Projects</Link><Link href="/privacy">Privacy</Link><Link href="/terms">Terms</Link></div><small>© {YEAR} {PERSON_NAME} · {LOCATION.city}, {LOCATION.country}. All rights reserved.</small></nav></footer>; }
