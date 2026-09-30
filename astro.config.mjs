// @ts-check
import { defineConfig } from 'astro/config';

// GitHub Pages user site at https://antoniol00.github.io/. Once a custom domain is
// configured, set SITE_URL to it (see .github/workflows/deploy.yml). BASE_PATH is
// only needed if the site is ever served from a subpath.
const site = process.env.SITE_URL ?? 'https://antoniol00.github.io';
const base = process.env.BASE_PATH ?? '/';

export default defineConfig({
  site,
  base,
  trailingSlash: 'ignore',
  redirects: {
    // Redirect targets are not prefixed with `base` automatically.
    '/news': `${base.replace(/\/$/, '')}/activities`,
  },
});
