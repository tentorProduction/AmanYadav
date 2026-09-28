const words = ["Web", "Backend", "Mobile", "APIs", "Databases", "Build", "Ship", "Scale", "Repeat"];
export function Marquee() { const line = words.map((word) => <span key={word}>{word}<b>•</b></span>); return <div className="marquee" aria-label={words.join(", ")}><div className="marquee-track">{line}{line}</div></div>; }
