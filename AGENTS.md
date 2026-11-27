## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Content authoring

Before adding or substantially revising content, read the collection schema in
`src/content.config.ts` and at least one nearby example of the same kind. Keep new pages within the
existing project or blog collections; reuse the current layouts, sidebar navigation, and shared
components rather than creating one-off page designs.

### Project guides

- Put an overview at `src/content/projects/<project-slug>/index.md` and guide pages in that
  project's `sections/` directory.
- Keep each page focused on one topic and give it a clear `title` and a concise, accurate
  `description`. The layout renders the page title, so start body content with `##` headings rather
  than repeating it as an `#` heading.
- Use the established progression of **Overview**, **Concepts**, then **Implementation** when it
  fits the project. Give each section a `group` and integer `order` so sidebar and previous/next
  navigation follow a deliberate learning sequence.
- Explain concepts before relying on them in implementation steps. For procedural pages, state
  prerequisites and working directory, give runnable commands or code, and describe how to verify
  the result. Include limitations or troubleshooting where they affect the task.
- Keep project-specific claims grounded in the checked-in code, data, and results. Label estimates,
  examples, and known limitations accurately; do not invent metrics, capabilities, or completed
  work.

### Blog posts

- Add posts under `src/content/blog/` with the schema's `title`, `description`, and `pubDate`.
  Include relevant `tags`; set `draft: true` for unfinished work and `updatedDate` when materially
  updating a published article.
- Open with the article's subject and why it matters, then use descriptive `##` headings to build
  one clear argument or explanation. Use `###` only to group material under a relevant section.
- Write standalone explanations, but link to the related project guide when it contains the
  project's full procedure or implementation details. Avoid copying large passages between pages;
  keep shared facts consistent.

### Style and review

- Match the existing text-first style: concise paragraphs, descriptive headings, and lists or tables
  when they make steps or comparisons easier to scan. Use fenced code blocks with the correct
  language; commands must reflect the documented shell, paths, and prerequisites.
- Define specialized terms on first use and keep terminology, capitalization, filenames, and
  project claims consistent across related pages.
- Use existing MDX components such as `Callout` only when they add useful emphasis. Give images
  meaningful alt text and use links whose destinations are verified.
- Before finishing, check frontmatter against the schema, review section ordering and cross-links,
  and run `npm run build` to catch content and route errors.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)
