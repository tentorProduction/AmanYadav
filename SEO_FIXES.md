# Implemented fixes

See SEO_AUDIT.md for the 11 finding groups and evidence.

Modified: lib/seo.ts, .env.example, app/layout.tsx, app/page.tsx, app/projects/page.tsx, app/contact/page.tsx, app/privacy/page.tsx, app/terms/page.tsx, app/globals.css, data/content.ts, components/RecentWork.tsx, components/ThreeBlob.tsx, components/ContactForm.tsx, app/api/contact/route.ts, package.json.

Added: app/fonts.ts, app/apple-icon.tsx, scripts/seo-check.mjs, scripts/audit-live.mjs and the six SEO reports. Removed: components/Testimonial.tsx.

Sitemap, robots, JSON-LD and llms.txt use the corrected shared origin automatically. Domain deployment redirects were inspected, not edited. Five working public pages retained. Contact validation, honeypot and existing in-memory throttle retained; invalid-input testing sends no email. Missing-provider errors now give a useful public fallback rather than environment setup instructions.

The previous user-directed removal of the analytics banner remains in effect; analytics are disabled. No consent is silently granted. Privacy copy now reflects locally served fonts.

No case studies added without source evidence. No fake screenshots, endorsements, client results or profile links introduced. No LinkedIn URL supplied. Project destinations are live, but functional end-to-end tests on external products were not performed.

Remaining: deploy local changes; verify Google-selected canonicals in GSC; export exact affected URLs; optional hosting-level one-hop HTTP apex redirect; external Rich Results/Schema validator and Lighthouse measurements. Existing process-local contact throttling is not a distributed serverless rate limit; preserve it here and consider a shared store if abuse warrants it.
