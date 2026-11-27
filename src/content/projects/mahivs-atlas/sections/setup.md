---
title: Local setup
description: Install dependencies and run the portfolio locally.
group: Getting started
order: 1
---

## Requirements

Use Node.js `>=22.23.4` and npm. From the project directory:

```sh
npm install
npm run dev
```

Astro prints the local URL when the development server starts. Build the static site with:

```sh
npm run build
```

## Local content workflow

Add a project index under `src/content/projects/<project>/index.md`, sections under its `sections/` directory, and posts under `src/content/blog/`. Content frontmatter is checked against the schemas in `src/content.config.ts`.
