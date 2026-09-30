# antoniolara.github.io

Personal academic website of Antonio Lara Gutiérrez, built with [Astro](https://astro.build).

## Development

```sh
npm install
npm run dev      # http://localhost:4321/antoniolara.github.io
npm run build    # static output in dist/
```

## Content

- `src/data/site.ts` — name, description, social links, navigation.
- `src/data/cv.ts` — CV sections (education, experience, awards, skills, news…).
- `src/content/publications/*.md` — one file per publication (schema in `src/content.config.ts`).
- `public/cv-antonio-lara-gutierrez.pdf` — downloadable CV (source files in `docs/`).

## Deployment

Pushing to `main` builds and deploys to GitHub Pages via `.github/workflows/deploy.yml`
(Settings → Pages → Source: **GitHub Actions**).

The site is currently served at `https://antoniol00.github.io/antoniolara.github.io/`.
To move to a custom domain: set `SITE_URL` to the domain and `BASE_PATH` to `/` in the
workflow, add `public/CNAME` with the domain, and configure DNS.
