"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "@/components/Logo";

const links = [
  { href: "/#about", label: "About", className: "nav-about" },
  { href: "/projects", label: "Projects", className: "nav-projects" },
  { href: "/#work", label: "Work", className: "nav-work" },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="navbar">
      <Link className="wordmark" href="/" aria-label="Aman — home"><Logo size={38} /></Link>
      <nav aria-label="Main navigation">
        {links.map((link) =>
          link.href.includes("#") ? (
            // Plain anchors: a full load guarantees the browser scrolls to the section.
            <a key={link.href} href={link.href} className={link.className}>{link.label}</a>
          ) : (
            <Link key={link.href} href={link.href} className={link.className} aria-current={pathname === link.href ? "page" : undefined}>
              {link.label}
            </Link>
          ),
        )}
      </nav>
      <Link className="nav-cta" href="/contact">
        Hire me <span aria-hidden="true">→</span>
      </Link>
    </header>
  );
}
