# antoniol00.github.io

Personal academic website of Antonio Lara Gutiérrez, built with [Astro](https://astro.build).

## Development

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # static output in dist/
```

## Content

- `src/data/site.ts` — name, description, social links, navigation.
- `src/data/cv.ts` — CV sections (education, experience, awards, skills…).
- `src/content/publications/*.md` — one file per publication (schema in `src/content.config.ts`).
  Covers/logos live in `src/assets/publications/`.
- `src/content/activities/*.md` — one file per activity (talk, award, conference…): `date` (`YYYY-MM-DD`, or `YYYY-MM` if the day
  doesn't matter), optional `endDate` for multi-day events, `category`, `summary` (one line for the
  home page), `location`, `links`, related `publications`, optional `image`; the body is the detailed text.
- `src/content/projects/*.md` — one file per project (summary, tags, repo, links, related publications).
- `src/data/authors.ts` — ORCID iDs of co-authors, linked from author names.
- `src/assets/gallery/<country>/` — gallery photos, one folder per country (see the README there;
  optional names/captions in `src/data/gallery.ts`).
- `public/cv-antonio-lara-gutierrez.pdf` — downloadable CV (source files in `docs/`).

## Deployment

Pushing to `main` builds and deploys to GitHub Pages via `.github/workflows/deploy.yml`
(Settings → Pages → Source: **GitHub Actions**).

The site is served at `https://antoniol00.github.io/`.
To move to a custom domain: set `SITE_URL` to the domain in the workflow, add
`public/CNAME` with the domain, and configure DNS.
