export const projects = [
  { id: "01", name: "CapGen", tags: "AI / Video / Web App", tone: "coral" },
  { id: "02", name: "Personal Portfolio", tags: "Full-stack / Next.js", tone: "blue" },
  { id: "03", name: "TaskFlow", tags: "SaaS / Web Platform", tone: "lime" },
  { id: "04", name: "Android App", tags: "Kotlin / Firebase", tone: "yellow" },
] as const;

export const figures = [
  { value: "10+", label: "Projects", note: "and counting", color: "pink" },
  { value: "5+", label: "Full-stack builds", note: "from zero to one", color: "blue" },
  { value: "3+", label: "Mobile apps", note: "built to travel", color: "orange" },
  { value: "∞", label: "Things to build", note: "still curious", color: "lime" },
] as const;

export const liveProjects = [
  {
    name: "CapGen",
    schemaCategory: "MultimediaApp",
    operatingSystem: "Web browser",
    url: "https://capgen.app",
    host: "capgen.app",
    tags: "AI / Video / Web App",
    tone: "coral",
    blurb: "Free AI caption generator for Reels, Shorts and TikTok — turn raw footage into scroll-stopping subtitles.",
  },
  {
    name: "Smash Ground 3D",
    schemaCategory: "Game",
    operatingSystem: "Web browser",
    url: "https://www.blocksmash3d.site",
    host: "blocksmash3d.site",
    tags: "WebGL / Browser Game",
    tone: "blue",
    blurb: "3D helix stack-smashing arcade game with a downward rush, fever fireball, 500 progressive levels and collectible ball skins.",
  },
  {
    name: "CinemaVortex",
    schemaCategory: "EntertainmentApp",
    operatingSystem: "Web browser",
    url: "https://www.cinemavortex.site",
    host: "cinemavortex.site",
    tags: "Media / Frontend",
    tone: "lime",
    blurb: "Movie and series browsing front-end with search, genres and HD detail pages.",
  },
  {
    name: "YapPDF",
    schemaCategory: "ProductivityApplication",
    operatingSystem: "Android",
    url: "https://www.yappdf.app",
    host: "yappdf.app",
    tags: "Android / PDF / TTS",
    tone: "yellow",
    blurb: "Turns any PDF into an audiobook with natural US and UK voices — fully offline, with sentence tracking and up to 2x speed.",
  },
  {
    name: "QR Maker",
    schemaCategory: "UtilitiesApplication",
    operatingSystem: "Web browser",
    url: "https://www.qrmaker.tech",
    host: "qrmaker.tech",
    tags: "Tool / Generator",
    tone: "pink",
    blurb: "Static QR codes with logos, “Scan Me” frames, custom colours and shapes — PNG and vector SVG export, no sign-up.",
  },
  {
    name: "Vanya Gaming Cafe",
    schemaCategory: "BusinessApplication",
    operatingSystem: "Web browser",
    url: "https://vanyacafe.vercel.app",
    host: "vanyacafe.vercel.app",
    tags: "Booking / Hospitality",
    tone: "orange",
    blurb: "Reserve solo and duo seats, browse the games library, and order snacks straight to your table.",
  },
  {
    name: "ArrowRusher Way",
    schemaCategory: "Game",
    operatingSystem: "Android, Web browser",
    url: "https://arrowrusher.vercel.app",
    host: "arrowrusher.vercel.app",
    tags: "Mobile / Puzzle Game",
    tone: "purple",
    blurb: "Tactile puzzle game — clear arrow labyrinths, unlock skins and rush your way to victory.",
  },
] as const;

export const faqs = [
  {
    q: "Who is Aman Yadav?",
    a: "Aman Yadav is a full-stack developer who builds digital products end to end — interface, backend and deployment. Seven of his products are live and linked from amanyadav.dev/projects.",
  },
  {
    q: "What does Aman Yadav build?",
    a: "Web apps, mobile apps, backend systems and APIs, plus one-off tools and prototypes taken through to production. Recent work spans an AI caption generator, two browser games, a PDF-to-audiobook Android app, a QR code tool and a cafe booking site.",
  },
  {
    q: "What technologies does Aman Yadav use?",
    a: "TypeScript and React on the front end, usually with Next.js and Tailwind CSS; Node.js for backends and APIs; Kotlin for Android; three.js and WebGL for 3D in the browser; GSAP for motion.",
  },
  {
    q: "How do you contact Aman Yadav about a project?",
    a: "Use the form at amanyadav.dev/contact with your name, email and a short description of what you are building, or email hello@amanyadav.dev directly. Replies usually arrive within a day.",
  },
  {
    q: "Are the projects on the portfolio actually live?",
    a: "Yes. Every card on amanyadav.dev/projects opens the real deployed site in a new tab — capgen.app, blocksmash3d.site, cinemavortex.site, yappdf.app, qrmaker.tech, vanyacafe.vercel.app and arrowrusher.vercel.app.",
  },
] as const;

