import Link from "next/link";
import { Logo } from "@/components/Logo";

// Static pages bake this at build time, so anchor it to the audience's clock rather than the build host's UTC.
const YEAR = new Intl.DateTimeFormat("en", { timeZone: "Asia/Kolkata", year: "numeric" }).format(new Date());

export function ContactFooter() { return <footer className="contact-footer" id="contact"><div className="footer-giant" aria-hidden="true">Aman</div><p className="section-number">05 / Say hello</p><h2>Great things can happen<br/>with a simple <em>“hello.”</em></h2><Link className="contact-button" href="/contact">Let’s work together <span>→</span></Link><div className="footer-bottom"><div><strong className="wordmark"><Logo size={34}/></strong><span>Full-Stack Developer</span></div><div className="footer-links"><a href="https://github.com/">GitHub</a><a href="https://linkedin.com/">LinkedIn</a><a href="mailto:hello@amanyadav.dev">Email</a></div><small>© {YEAR} Aman. All rights reserved.</small></div></footer>; }
