---
title: Content system
description: Understand content collections, schemas, and how structured Markdown becomes pages.
group: Concepts
order: 2
---

## Content as structured data

The site separates its content from its page templates. Project descriptions, project guide sections,
and blog posts live as Markdown or MDX files under `src/content/`. This keeps writing reviewable and
editable without embedding every article in a component.

## Collections and schemas

Astro content collections group related entries and validate their frontmatter. In
`src/content.config.ts`, glob loaders discover Markdown and MDX files; Zod schemas check required
fields such as titles, descriptions, dates, tags, status, and ordering. Validation catches missing or
incorrect metadata while building rather than leaving malformed pages in production.

The site has three collections:

- **Projects** use `src/content/projects/<project>/index.md` for the project overview.
- **Project sections** use files in that project's `sections/` directory. Their `group` and `order`
  fields define the guide navigation.
- **Blog posts** use Markdown or MDX files in `src/content/blog/`. Draft posts are filtered from
  public listings and feeds.

## Rendering and navigation

Routes query collections with Astro's `getCollection()` and render entries with `render()`. Markdown
headings provide stable anchors and the table of contents. The same section metadata drives both
individual guide URLs and the left-hand sidebar, avoiding a separate hand-maintained navigation list.
