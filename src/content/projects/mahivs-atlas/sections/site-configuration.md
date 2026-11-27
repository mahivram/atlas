---
title: Site configuration
description: Configure Astro integrations, syntax highlighting, and deployment URL handling.
group: Implementation
order: 6
---

## Astro configuration

The root `astro.config.mjs` registers MDX, sitemap generation, icons, Pagefind, and Tailwind's Vite
plugin. The Markdown configuration sets the syntax-highlighting theme used for code examples.

Keep integrations and build settings in this file. Content validation belongs in
`src/content.config.ts`, and page-specific behavior belongs with the relevant route or component.

## Site origin and base path

The `site` and `base` settings control canonical URLs and links to built assets. They read `SITE_URL`
and `BASE_PATH` from the environment, with defaults suitable for local development.

For the GitHub Pages project site, the workflow sets `SITE_URL=https://mahivram.github.io` and
`BASE_PATH=/atlas`. URL helpers in `src/utils/paths.ts` add the configured base path to internal
links so nested pages work after deployment.

## Configuration changes

After changing integrations, base paths, or build options, run a production build. When testing a
project-site deployment locally, use the same environment variables as the workflow to catch
incorrect asset and canonical URLs before publishing.
