---
title: Authoring content
description: Add project guides and blog posts using validated Markdown and MDX files.
group: Implementation
order: 7
---

## Add a project guide

Create `src/content/projects/<project-slug>/index.md` for the overview. Add guide pages under
`src/content/projects/<project-slug>/sections/`. Each section needs a title, description, group, and
integer order in its frontmatter.

The group names become the sidebar's section headings, and the order controls the sequence within
each group. Use groups that make the guide's progression clear, such as **Concepts** followed by
**Implementation**.

## Add a blog post

Create a Markdown or MDX file in `src/content/blog/`. Posts need a title, description, and publication
date. Add tags for topic pages; set `draft: true` to exclude an unfinished article from public
listing and feed generation.

## Write useful technical documentation

Introduce the problem and vocabulary before giving commands or code. Keep one task or concept per
section, explain assumptions, and distinguish verified project behavior from future work. Update
nearby navigation metadata whenever a page is added or reordered.

Astro validates collection frontmatter during development and builds. Resolve those errors rather
than bypassing the schema, so content stays consistent across listings, sidebars, and feeds.
