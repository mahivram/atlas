---
title: Content system
description: Use content collections to keep projects and posts structured and type-checked.
group: Concepts
order: 2
---

## Collection structure

Astro's glob loader finds Markdown and MDX entries. Zod schemas validate required titles, descriptions, dates, tags, project status, and section order.

Project index files describe the project as a whole. Separate section files carry a group name and order, which the project sidebar uses to build its navigation. Blog entries can be drafted without appearing in production lists, RSS, or the search index.

## Shared layouts

The portfolio and list pages use a single reading column. Project and blog detail pages add navigation specific to their content, plus a table of contents generated from Markdown headings.
