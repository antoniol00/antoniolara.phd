# antoniolara.phd

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
- `src/data/gallery.ts` — gallery photos hosted on Flickr, grouped by country (from each photo's
  Flickr embed code: page URL, image URL and size). Countries without photos are hidden.
- `public/cv-antonio-lara-gutierrez.pdf` — downloadable CV (source files in `docs/`).

## Deployment

The site is deployed on [Vercel](https://vercel.com) from the `main` branch (framework preset
**Astro**, build command `npm run build`, output directory `dist`) and served at
<https://antoniolara.phd>. The domain is registered with Cloudflare Registrar; DNS records point to
Vercel.

Every push to `main` triggers a production deploy; pushes to other branches get preview URLs.

The share image `public/og.png` is generated with `node scripts/og-image.mjs`.
