---
title: Shared layouts and components
description: Build the common site shell and reusable documentation components.
group: Implementation
order: 8
---

## Start with the shared shell

`BaseLayout.astro` provides shared page metadata, the site header and footer, search configuration,
and the flexible page body. `DocsLayout.astro` adds the shared container grid used by project and blog
detail pages.

Use layouts for structure shared by multiple routes, and use components for focused pieces such as
the header, footer, project sidebar, and callouts.

## Use slots for page-specific content

The docs layout accepts page content and optional sidebar content through slots. It receives
generated Markdown headings to build the table of contents. This lets a project guide and a blog
article share the same reading frame without sharing their content.

## Keep responsive behavior aligned

The sidebar, article, and table of contents share their layout breakpoints. Wide screens show the
full documentation grid; tablet and mobile layouts progressively collapse secondary navigation.
When changing a breakpoint, check both the layout CSS and the sidebar's disclosure behavior.

Prefer semantic HTML and small, explicit styles. A reusable component should own its own behavior
and styles without adding another wrapper that changes the shared container alignment.
