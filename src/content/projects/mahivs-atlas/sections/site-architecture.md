---
title: Routes and shared layouts
description: Understand how URLs, page templates, and reusable layouts fit together.
group: Concepts
order: 3
---

## Routes map URLs to pages

Astro files in `src/pages/` define the site's routes. Static pages use a direct filename, while
dynamic routes can generate paths from content entries. Atlas uses collection data to generate
project overviews, guide sections, blog posts, and tag pages.

Each content item has one canonical page path. Sidebar links, cards, breadcrumbs, and previous/next
links should all point to that same route.

## Layouts define the shared frame

The base layout supplies the document head, header, footer, search dialog, and page shell. The docs
layout adds the project or blog sidebar and an optional table of contents. Individual pages provide
their content through slots.

This separation means shared behavior is implemented once while each route can retain its own
content and metadata.

## Content width and navigation

The shared responsive container aligns the header, page content, and footer. Documentation pages use
a sidebar, readable article column, and optional table of contents on wide screens; these regions
collapse into simpler layouts on smaller screens.

Routes and navigation should remain useful without client-side JavaScript. Native links, headings,
and disclosure elements provide the core structure, while scripts enhance selected interactions.
