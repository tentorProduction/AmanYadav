# Verification and performance

Date: 2026-10-14. Production HTTP audit: all five content pages and seven project destinations returned 200. Alternate hosts/trailing slash redirected as recorded in SEO_AUDIT.md.

Before: homepage build first-load JS 155 kB, homepage route 49.1 kB; fonts loaded through external CSS @import; continuous WebGL rendering with per-frame motion query; fabricated testimonials rendered.

After initial fixes: homepage route 48.7 kB, first-load JS 155 kB (rounded). Three.js remains a separate lazy-loaded chunk and is not counted as absent from total runtime downloads. Mesh detail falls from 20 to 12, approximate triangles 17,640 → 6,760; DPR cap 1.5 → 1.25; static shadow captured once; off-screen frame loop stopped; reduced-motion effects stopped. Same font families now bundled by next/font with display swap. No LCP/INP/CLS improvement is claimed without measurement.

PageSpeed Insights mobile API attempt returned HTTP 429 RESOURCE_EXHAUSTED (daily quota). No Lighthouse score, CrUX field result, INP or before/after timing is available. Rerun mobile/desktop PSI after deployment with available quota, or Lighthouse in browser DevTools. Target LCP ≤2.5s, INP ≤200ms, CLS ≤0.1; these are targets, not measured results.

Production build and TypeScript checks pass. No separate lint configuration or existing test suite was present; Next build reports its lint/type-check phase. A standalone lint result is not claimed. Added SEO smoke test inspects HTTP status, single canonical, title/description, H1, Open Graph image, indexability, JSON-LD syntax, five-URL sitemap, robots, unknown-route 404 and invalid contact-input rejection. No real message was sent.

External Rich Results Test and Schema.org Validator have not been completed. Source/API inspection does not verify deliverability, all external app functions, backlinks or account ownership. Desktop/mobile/tablet browser checks are recorded separately when completed; broad WCAG compliance is not certified.

Rendered smoke suite passes for all five content routes, generated image/icon responses and all internal page links. Breadcrumb JSON is parsed and sequential item positions/preferred-host URLs checked locally. Homepage canonical serializes without a trailing slash under Next.js metadata normalization; URL normalization yields the equivalent root URL.

Browser verification: 390×844 homepage/projects/contact rendered with fonts loaded and no document-width overflow. 768×1024 checks on all five public pages found document width 753px against 768px viewport. Empty contact submission showed an accessible message and focused the name field; no delivery request was made. Contact browser console had no warnings/errors in the captured log. Mobile hero handwritten note needed additional lower padding and was corrected. Desktop composition was visually inspected. These are sample responsive checks, not a full accessibility certification.

Final verification: production build, standalone TypeScript check and the expanded rendered SEO suite all passed after the last source edit. Mobile /privacy and /terms also showed no document-width overflow (375px document, 390px viewport). Loaded mobile hero was rechecked after padding correction; the note is fully above the marquee. Preview runs at http://127.0.0.1:3100. These changes are local and have not been deployed.
