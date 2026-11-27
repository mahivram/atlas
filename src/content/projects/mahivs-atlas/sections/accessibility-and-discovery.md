---
title: Accessible navigation and discovery
description: Explore semantic navigation, keyboard support, search, and discoverability features.
group: Concepts
order: 4
---

## Semantic structure first

Pages use headings, landmarks, links, buttons, and disclosure elements according to their purpose.
This gives keyboard and assistive-technology users a meaningful structure and provides working
navigation before any enhancement script runs.

Interactive controls need accessible names and state. For example, the menu and theme buttons expose
their current state through ARIA attributes, and the skip link lets keyboard users move directly to
the main content.

## Findability

The project sidebar and table of contents help readers orient themselves within a guide. Search
supports finding pages across the site, and descriptive page titles and metadata help browsers and
external services identify each route.

RSS and sitemap output serve different purposes: RSS announces new posts to feed readers, while the
sitemap lists canonical pages for crawlers. These are generated from the same public content rather
than maintained as separate page lists.

## Progressive enhancement

Core content and links are rendered as HTML. Client-side code enhances the search dialog, theme
switch, and mobile menu; it should not be required to read project documentation or navigate between
pages.
