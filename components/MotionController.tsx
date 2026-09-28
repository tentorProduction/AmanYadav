"use client";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function MotionController() {
  useEffect(() => { if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return; gsap.registerPlugin(ScrollTrigger); const context = gsap.context(() => { gsap.from(".navbar", { opacity: 0, y: -14, duration: .7, ease: "power2.out" }); gsap.from(".blob-scene", { opacity: 0, scale: .88, duration: 1, delay: .35, ease: "power3.out" }); gsap.utils.toArray<HTMLElement>(".statement-copy, .figures-heading h2, .testimonial blockquote, .contact-footer h2").forEach((el) => gsap.from(el, { scrollTrigger: { trigger: el, start: "top 82%", once: true }, opacity: 0, y: 42, duration: .85, ease: "power3.out" })); gsap.from(".figure", { scrollTrigger: { trigger: ".figure-list", start: "top 76%", once: true }, opacity: 0, y: 28, stagger: .1, duration: .65 }); }); return () => context.revert(); }, []); return null;
}
