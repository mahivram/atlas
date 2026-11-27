---
title: Static site generation
description: Learn what Astro renders at build time and why this portfolio uses a static architecture.
group: Concepts
order: 1
---

## What a static site is

A static site is generated into HTML, CSS, JavaScript, and assets before visitors request a page.
The host can serve those files directly, without running application code or querying a database for
each visit.

Static does not mean the site has no dynamic behavior. Search, theme switching, and mobile
navigation can run in the browser, while the page content itself is already generated.

## Astro's build-time model

Astro loads the project's content and renders routes into static files during `astro build`. The
deployed output is the `dist/` directory. This makes page delivery simple and lets GitHub Pages host
the result.

The trade-off is that content or code changes require a new build and deployment. This fits a
portfolio and documentation site, where updates are published deliberately rather than written by
visitors.

## Why this architecture fits Atlas

The site has a known set of project guides and blog posts. Generating them at build time provides
fast page delivery and predictable routes, while keeping authoring in Markdown and MDX. Small
client-side scripts handle only interactions that need a browser, such as the theme toggle and search
dialog.
