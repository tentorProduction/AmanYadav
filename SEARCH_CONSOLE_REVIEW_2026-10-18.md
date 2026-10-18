# amanyadav.dev — live Search Console review

Reviewed 2026-10-18 through the owner's connected Google Search Console session. CapGen was inspected briefly before the owner corrected the target; no CapGen code, deployment or Search Console setting was changed.

## What Google actually reports

The Pages overview is last updated October 12: 3 indexed, 7 excluded (4 redirects and 3 discovered-not-indexed). It predates the October 14 deployment and is not a current inventory of indexed canonical pages.

Discovered examples are https://amanyadav.dev/contact, https://amanyadav.dev/projects and https://amanyadav.dev/terms. Each now returns 308 to its matching www URL. Separate URL Inspection checks show all three www destinations are already **on Google / indexed**, each with a valid breadcrumb item. Projects was crawled October 14 at 9:38:30 PM as Googlebot smartphone; fetch/crawl/indexing allowed; Google-selected canonical matches https://www.amanyadav.dev/projects. Its URL Inspection sitemap field says Temporary processing error, but the actual Sitemaps report shows the submitted sitemap was read successfully October 14 with five discovered pages. Do not infer a persistent sitemap failure from the isolated URL Inspection field.

The four redirect examples: https://amanyadav.dev/privacy, https://amanyadav.dev/, http://amanyadav.dev/, http://www.amanyadav.dev/. These are expected alternate-host/protocol redirects. Do not remove the redirects, request indexing of these aliases, or start validation just to make their exclusion count disappear.

The sitemap https://www.amanyadav.dev/sitemap.xml has Success status, submitted and last read October 14, with five discovered pages. It was not unnecessarily resubmitted.

## Performance baseline

Selected UI range: 3 months; available chart spans September 27 through October 15, 2026; search type Web. Totals: **7 clicks, 31 impressions, CTR 22.6%, average position 4.7**. These numbers apply only to this small sample, not to 1,000 keywords or all developer-service searches.

Visible query rows: `amanyadav` (0 clicks / 1 impression), `aman yadav linkedin` (0 / 1). Query reports suppress some low-volume queries; this does not mean Google recorded only two queries or that the click total is inconsistent.

Pages table: www homepage 7 clicks / 24 impressions; privacy 0 / 9; terms 0 / 3; contact 0 / 2; projects 0 / 1. Do not sum page-level impressions and expect the property-level total to match; they use different aggregation.

Overview: HTTPS 5 / non-HTTPS 0, breadcrumbs 4 valid / 0 invalid. Core Web Vitals has no data, which is not a failure score. Manual Actions and Security detail reports were not inspected; no claim of a clean penalty/security report is made.

## Live verification and implementation

`node scripts/seo-check.mjs https://www.amanyadav.dev` passes on the existing deployment: five content pages 200, unique titles, correct www canonicals, description/H1/social metadata, JSON-LD parse checks, sitemap, robots, generated images, internal links and missing-route 404. No contact email was submitted.

No new canonical or robots patch was needed: the October 14 fixes are deployed and working. The current constraint is very limited discovery, not evidence of blocked canonical Contact/Projects/Terms pages.

Added one source-backed technical case study at /projects/portfolio about this site's actual Next.js rendering, Three.js implementation, reduced-motion handling, contact endpoint and metadata. Linked from /projects, added to sitemap, with Article metadata and breadcrumbs. No unsupported commercial results, clients, ratings or invented project internals. The expanded regression check covers six public pages. This new page is local until deployed; it is not claimed indexed.

Desktop review also exposed a shared CSS leak: the footer's absolute contact-button positioning applied to in-page calls to action, making them float near the top. Scoped the page-cta override to normal flow; footer placement is retained. Production build, TypeScript and six-page SEO regression checks pass. No Google request-indexing/validation action was submitted for already-indexed pages or intentional aliases.

## Plan toward broader relevant queries

1. Deploy the case study and check its canonical URL returns 200, appears in sitemap, and is linked from Projects. Inspect the new canonical in GSC after deployment; request indexing once if appropriate.
2. Start with identity and actual-service clusters: Aman Yadav developer/portfolio/Janakpur/Nepal; Next.js/React full-stack development; Android/Kotlin work; backend/API work. The case study supports Next.js portfolio, Three.js integration, accessible animation and technical implementation intents with real evidence.
3. Add further project case studies only from actual source code and Aman's contribution notes. Useful coverage includes architectural choices, constraints, deployment fixes and real screenshots. No 1,000-page city/keyword template campaign and no keyword-stuffed metadata.
4. Measure branded versus non-branded GSC queries every 28 days. First seek repeatable non-branded impressions and qualified enquiries; grow toward 25, then 100, then larger sets of relevant queries. Those are planning milestones, not promised results or deadlines.
5. Verify and connect a genuine LinkedIn profile if Aman supplies it, since a visible query asks for LinkedIn. Do not invent a profile URL. Keep GitHub and owned project attribution consistent and earn links through useful public work.

The business goal can be visibility for 1,000+ relevant long-tail queries over time. There is no current evidence establishing the search demand or attainability of that number for this five-page portfolio, and neither top positions nor a keyword count can be guaranteed.

Guidance: [Google canonical consolidation](https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls), [Google spam policies](https://developers.google.com/search/docs/essentials/spam-policies). Rankings require useful content and audience relevance; technical eligibility is not a ranking guarantee.
