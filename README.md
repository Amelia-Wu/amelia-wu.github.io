# Personal website

Built with [Astro](https://astro.build). Resume, projects, and a Markdown blog.

## Run it locally

```sh
npm install
npm run dev      # http://localhost:4321
```

## Where to edit things

| What | File |
| --- | --- |
| Name, bio, links | `src/data/site.ts` |
| Resume | `src/data/resume.ts` |
| Projects | `src/data/projects.ts` |
| Blog posts | `src/content/blog/*.md` (one file per post) |
| Colors and fonts | `src/styles/global.css` |

## Writing a blog post

Add a Markdown file to `src/content/blog/` with this header:

```md
---
title: "Post title"
description: "One sentence summary."
date: 2026-12-01
tags: ["notes"]
draft: false
---
```

## Build

```sh
npm run build    # outputs static files to dist/
```

## Deploy

Pushing to `main` builds and publishes the site to GitHub Pages via `.github/workflows/deploy.yml`.
One-time setup: in the repo, go to **Settings → Pages** and set **Source** to **GitHub Actions**.
