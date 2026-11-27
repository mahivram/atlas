# Mahiv's Atlas

Mahiv's Atlas is a text-first portfolio, project library, and blog. It documents projects from their
underlying ideas through setup, implementation, evaluation, and practical guidance.

## Development

Requirements: Node.js `>=22.23.4` and npm.

```sh
npm install
npm run dev
```

Astro serves the site at `http://localhost:4321`. To create and preview a production build:

```sh
npm run build
npm run preview
```

The Pagefind search index is generated during the production build. Search results are available in
the production build and preview.

## Content

### Projects

Project overviews live at `src/content/projects/<project-slug>/index.md`. Put project guides in
`src/content/projects/<project-slug>/sections/`; each section becomes a page in the project sidebar.
Sections are grouped and ordered using `group` and `order` frontmatter fields.

Project frontmatter fields are `title`, `description`, `date`, `status` (`active`, `completed`, or
`archived`), and `tags`. `featured`, `repo`, and `demo` are optional.

### Blog

Add a Markdown or MDX article under `src/content/blog/`. Each post needs `title`, `description`, and
`pubDate`; `tags`, `updatedDate`, and `draft` are optional. Draft posts are excluded from public
pages, the search index, and the RSS feed. Public articles include topic pages, reading time, and
previous/next links.

Collection schemas are defined in `src/content.config.ts`. Use the existing content as examples.

## Deployment

The GitHub Actions workflow builds and deploys the site to GitHub Pages. Enable **Settings → Pages
→ Build and deployment → GitHub Actions** in the repository.

The workflow sets `SITE_URL` to the owner's GitHub Pages domain and selects the correct `BASE_PATH`
for either a user site (`/`) or a project site (`/<repository>/`). For a custom deployment, set
`SITE_URL` to the public origin and `BASE_PATH` to the deployed subpath before building.

## Current projects

- [Target Detection](src/content/projects/target-detection/index.md) — a YOLO26 computer-vision
  guide covering detection theory, dataset preparation, setup, training, evaluation, inference, and
  limitations. The dataset and Python implementation are in `../target_detection/` relative to
  this site.
- [Mahiv's Atlas](src/content/projects/mahivs-atlas/index.md) — the Astro site and its documentation
  system.

The blog feed is available at `/rss.xml`.
