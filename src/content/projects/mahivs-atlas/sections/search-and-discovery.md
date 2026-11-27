---
title: Search and site metadata
description: Generate search, feeds, sitemaps, and canonical URLs from the published content.
group: Implementation
order: 9
---

## Search index

The Pagefind integration creates a search index during the production build. The search modal loads
that index in the browser, so indexing is part of `npm run build`; the development server alone
doesn't create the production search bundle.

Exclude interface-only text from indexing and ensure public pages contain useful headings and
descriptions. Draft blog posts are filtered from public listings and should not be included in
discovery.

## RSS and sitemap

The RSS route builds a feed from published blog posts. The sitemap integration uses the configured
site origin to emit public page URLs. `robots.txt` points crawlers to the sitemap.

Keep these outputs derived from the content collections and Astro configuration so that a new public
post or route does not require a separate manual index update.

## Validate metadata

Before deploying, inspect canonical URLs, feed links, sitemap entries, and robots output using the
same `SITE_URL` and `BASE_PATH` values as production. Confirm internal links include the repository
base path when building for GitHub Pages.
