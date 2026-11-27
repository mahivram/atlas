---
title: Local setup
description: Install dependencies and run the portfolio locally.
group: Implementation
order: 5
---

## Requirements and installation

Use Node.js `>=22.23.4` and npm. Clone the repository, enter its root directory, and install the
locked dependencies:

```sh
npm ci
```

`npm ci` installs the exact dependency versions recorded in `package-lock.json`. Use `npm install`
when intentionally changing dependencies.

## Run the development server

Start Astro's local server:

```sh
npm run dev
```

Open the URL printed in the terminal, usually `http://localhost:4321`. The server rebuilds pages as
you edit source files and content.

## Check a production build

Build and preview the generated static site:

```sh
npm run build
npm run preview
```

The production build also generates the Pagefind search index. Check page navigation, images, search,
RSS, and links against this preview before deployment.
