---
title: Deployment
description: Build the static site and deploy it to GitHub Pages with Actions.
group: Implementation
order: 10
---

## Configure the deployment URL

Astro needs the public site origin and repository base path when generating canonical URLs, sitemaps,
and asset links. The `atlas` repository is published at `https://mahivram.github.io/atlas/`; its
origin is `https://mahivram.github.io` and its base path is `/atlas`.

The workflow derives these values from the repository name. A `username.github.io` repository uses
`/`; a project repository uses `/<repository-name>`.

## Build and publish

The workflow in `.github/workflows/deploy.yml` installs the lockfile dependencies, runs
`npm run build`, uploads `dist/`, and deploys that artifact with GitHub Pages. In repository settings,
select **Settings → Pages → Build and deployment → GitHub Actions** as the publishing source.

Push to `main` or start the workflow manually to publish. Confirm both the build and deploy jobs
succeed, then open the deployment URL.

## Post-deployment checks

Verify that the home page and nested project/blog routes load, CSS and images use the `/atlas/` base,
and search works against the generated index. Also check canonical URLs, sitemap, robots file, and
RSS feed.
