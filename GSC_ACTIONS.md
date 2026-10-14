# Actions after deployment

1. Confirm https://www.amanyadav.dev is the Vercel primary domain and inspect all alternate-host redirects. Current HTTP apex has two intentional 308 hops; a single hop is preferable where the hosting dashboard supports it. Keep HTTPS and existing working routes.
2. Deploy this source. Fetch the five public pages, /robots.txt and /sitemap.xml again. Run `node scripts/seo-check.mjs https://www.amanyadav.dev`.
3. In Search Console, export the three discovered-not-indexed URLs and four redirect URLs with their exact reasons, last crawl dates and Google-selected canonical. The historical totals alone are insufficient to diagnose them.
4. Inspect /, /projects and /contact on the preferred www hostname. Compare user-declared versus Google-selected canonicals and use Test Live URL. Request indexing once for materially improved canonical pages after checking accessibility. Do not request indexing of intentional redirects.
5. Keep the submitted https://www.amanyadav.dev/sitemap.xml. Verify that it now lists the five www URLs and no redirects. Resubmit only after the deployment is confirmed.
6. Inspect /privacy and /terms if they appear among discovered-not-indexed URLs. Their indexability is intentional, but Google choosing not to index a low-demand legal page is not automatically a technical fault.
7. Run Google Rich Results Test and Schema.org Validator on deployed pages. Breadcrumbs must remain accurate. Local JSON parsing is not equivalent to these external validators. Software applications have no invented ratings/offers and are not promised rich-result eligibility.
8. Review Pages and Search Performance weekly; compare like-for-like date windows. Record branded/non-branded impressions, clicks, CTR and position by page, country and device. No-data Core Web Vitals is insufficient field data, not failure.

No GSC writes, URL submission, validation request or account changes were performed in this task. These steps require the owner's connected property or direct action.
