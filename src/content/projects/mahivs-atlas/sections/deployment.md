---
title: Deployment
description: Build the static site and deploy it to GitHub Pages with Actions.
group: Results
order: 3
---

## Configure the site URL and base path

The Astro configuration reads `SITE_URL` and `BASE_PATH`. For a user site named `mahivram.github.io`, use `https://mahivram.github.io` and `/`. This `atlas` project repository uses `https://mahivram.github.io` and `/atlas`; the GitHub Actions workflow sets both values automatically.

## Deploy with GitHub Actions

The workflow in `.github/workflows/deploy.yml` builds the site and publishes the generated `dist/` output. Enable GitHub Pages with **GitHub Actions** as the deployment source, then push to the configured default branch.

Check the generated site after deployment, especially links, the RSS feed, search, canonical URLs, and the sitemap.
