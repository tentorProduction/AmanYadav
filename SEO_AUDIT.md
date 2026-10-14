# SEO audit — 2026-10-14

Scope: local Next.js 15.5.26 App Router source and read-only production HTTP checks. Five canonical public content routes: /, /projects, /contact, /privacy, /terms. They are statically generated; /api/contact runs on Node.js. Vercel deployment configuration is present. No dependency upgrade or framework migration was necessary.

## Confirmed findings (11 groups)

| # | Priority | Evidence / root cause | Resolution |
|---|---|---|---|
| 1 | P0 | Live www pages canonicalized to apex, which redirects back to www. Sitemap and robots also used apex. | Shared origin fixed to https://www.amanyadav.dev. |
| 2 | P1 | Home title inherited the name template, risking repetition; descriptions were lengthy and secondary titles generic. | Absolute descriptive home/projects/contact titles and concise descriptions. |
| 3 | P1 | Homepage rendered two invented placeholder endorsements. | Removed component and section, without fabricating replacements. |
| 4 | P1 | 10+ projects / 5+ builds / 3+ mobile apps were unsupported. | Counts derive from seven published project records and declared platforms; labels describe listed work. |
| 5 | P2 | Homepage TaskFlow / Android App placeholders and all rows linked to #contact. | Selected projects come from actual portfolio records and link to their public destinations. |
| 6 | P2 | CapGen apex link adds a redirect. | Uses verified www destination. |
| 7 | P1 | Rendered secondary pages lacked og:image: child openGraph metadata replaces the parent object. | Explicit shared branded image on all five pages; page-specific Twitter metadata on projects/contact. |
| 8 | P3 | Fonts fetched using render-blocking external CSS @import. | next/font bundles the same three font families, with swap and local delivery. |
| 9 | P3 | WebGL ran continuously off-screen; matchMedia ran every frame; Float/distortion kept moving under reduced motion. | Visibility-driven render loop, subscribed motion preference, stopped reduced-motion effects, lower mesh detail/DPR and one-frame contact shadow. |
| 10 | P3 | Lime footer focus outline was lime; selected-work H2 was display:none; form errors were not associated with fields. | Black footer focus, screen-reader-visible H2, aria-describedby and matching field limits. |
| 11 | P3 | No Apple touch icon and no repeatable SEO check. | Generated icon and dependency-free rendered-response smoke checks. |

These 11 confirmed groups have local fixes. Deployment and external validation remain separate. Existing Person, WebSite, WebPage, CollectionPage, ContactPage, ItemList and BreadcrumbList markup is preserved. Unsupported Speakable markup and unnecessary FAQPage markup were removed; visible FAQ content remains. No ratings, credentials or new social identities were invented.

## Production evidence

All five public pages returned 200, as did sitemap and robots. All seven project URLs and github.com/tentorProduction returned 200. This checks availability/title, not every application feature or ownership. Existing project descriptions and skills are user-provided claims, not independently verified source-code inventories.

Observed redirects: HTTP apex → HTTPS apex → HTTPS www (308 twice); HTTP www → HTTPS www (308); HTTPS apex → HTTPS www (308); /projects/ → /projects (308). No loop observed. The HTTP apex two-hop chain is a hosting configuration improvement opportunity, not an indexing failure. No source redirect was added that could conflict with Vercel's domain redirect.

All five content pages remain indexable: portfolio/contact are discovery pages; legal pages offer original policies and are linked from the footer. There is no evidence requiring their removal from the working five-URL sitemap. API routes stay disallowed and out of sitemap. Static assets remain crawlable. Lastmod is updated only for pages materially changed in this pass; terms retains its existing date.

## Missing evidence

The historical GSC summary reports three discovered-not-indexed URLs and four redirects, but supplies no URL export. They cannot be mapped conclusively to known routes. No GSC access, query export, backlink inventory, verified testimonial, project-source evidence for detailed case studies, or real usage metrics was available. No indexing or ranking outcome is guaranteed.

Google guidance consulted: [canonicalization](https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls), [sitemaps](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap). Sitemaps are hints; accurate lastmod and canonical URLs matter. Google ignores priority/changefreq, so existing values were not treated as optimization gains.
