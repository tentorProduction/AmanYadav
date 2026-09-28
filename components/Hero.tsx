import { ThreeBlob } from "@/components/ThreeBlob";

function DigitalObject() {
  return <div className="blob-scene"><ThreeBlob/><svg className="scribble-star" viewBox="0 0 60 60" aria-hidden="true"><path d="M30 2l3 19 14-13-9 17 20-2-19 8 16 11-20-5 5 20-11-17-8 18 2-20-20 7 17-13L2 22l20 2Z"/></svg></div>;
}
export function Hero() {
  return <section className="hero" id="top"><h1 className="hero-title"><span className="title-line"><span className="title-line-inner">Hello, I’m Aman.</span></span><span className="title-line"><span className="title-line-inner">Full-Stack Developer</span></span></h1><div className="hero-lower"><p className="hand-note">turning<br/>ideas into<br/>real products <b>↘</b></p><DigitalObject/><ul className="disciplines" aria-label="Areas of expertise"><li><i/>Web</li><li>Android</li><li>Backend Systems</li></ul></div></section>;
}
