// @ts-check
import { defineConfig } from 'astro/config';

// GitHub Pages: while the site lives at antoniol00.github.io/antoniolara.github.io
// it needs a base path. Once a custom domain is configured, set SITE_URL to the
// domain and BASE_PATH to "/" (see .github/workflows/deploy.yml).
const site = process.env.SITE_URL ?? 'https://antoniol00.github.io';
const base = process.env.BASE_PATH ?? '/antoniolara.github.io';

export default defineConfig({
  site,
  base,
  trailingSlash: 'ignore',
});
