import Link from "next/link";
import { Logo } from "@/components/Logo";

export function Navbar() {
  return (
    <header className="navbar">
      <Link className="wordmark" href="/" aria-label="Aman — home"><Logo size={38} /></Link>
      <nav aria-label="Main navigation">
        <a href="/#about">About</a>
        <Link href="/projects">Projects</Link>
        <a href="/#work">Work</a>
        <Link href="/contact">Contact</Link>
      </nav>
    </header>
  );
}
