// Generates public/og.png (1200×630), the preview image used when the site is shared.
// Run with: node scripts/og-image.mjs
import sharp from 'sharp';

const W = 1200;
const H = 630;
const photo = 300;

const dots = [];
for (let y = 20; y < H; y += 26) for (let x = 20; x < W; x += 26) dots.push(`<circle cx="${x}" cy="${y}" r="1.3"/>`);

const svg = `
<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#0d1520"/>
      <stop offset="1" stop-color="#1b3a5c"/>
    </linearGradient>
    <radialGradient id="glow" cx="0.78" cy="0.45" r="0.55">
      <stop offset="0" stop-color="#7fb0e3" stop-opacity="0.35"/>
      <stop offset="1" stop-color="#7fb0e3" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="fade" cx="0.7" cy="0.4" r="0.7">
      <stop offset="0" stop-color="#fff" stop-opacity="1"/>
      <stop offset="1" stop-color="#fff" stop-opacity="0"/>
    </radialGradient>
    <mask id="m"><rect width="${W}" height="${H}" fill="url(#fade)"/></mask>
  </defs>
  <rect width="${W}" height="${H}" fill="url(#bg)"/>
  <rect width="${W}" height="${H}" fill="url(#glow)"/>
  <g fill="#a9cbef" fill-opacity="0.22" mask="url(#m)">${dots.join('')}</g>
  <text x="80" y="170" font-family="Segoe UI" font-size="20" font-weight="700" letter-spacing="5" fill="#7fb0e3">PHD CANDIDATE · AI FOR CYBERSECURITY</text>
  <text x="76" y="262" font-family="Segoe UI" font-size="78" font-weight="300" fill="#e5ebf2">Antonio</text>
  <text x="76" y="346" font-family="Segoe UI" font-size="78" font-weight="700" fill="#ffffff">Lara Gutiérrez</text>
  <rect x="80" y="382" width="90" height="4" rx="2" fill="#7fb0e3"/>
  <text x="80" y="436" font-family="Segoe UI" font-size="27" fill="#b4c0cd">FPU Predoctoral Researcher · NICS Lab</text>
  <text x="80" y="474" font-family="Segoe UI" font-size="27" fill="#b4c0cd">University of Málaga</text>
  <text x="80" y="560" font-family="Segoe UI" font-size="22" fill="#7f8d9e">antoniolara.phd</text>
</svg>`;

const rounded = Buffer.from(
  `<svg width="${photo}" height="${photo}"><rect width="${photo}" height="${photo}" rx="28" fill="#fff"/></svg>`,
);
const face = await sharp('src/assets/profile.png')
  .resize(photo, photo, { fit: 'cover' })
  .composite([{ input: rounded, blend: 'dest-in' }])
  .png()
  .toBuffer();

await sharp(Buffer.from(svg))
  .composite([{ input: face, left: W - 80 - photo, top: (H - photo) / 2 }])
  .png({ compressionLevel: 9 })
  .toFile('public/og.png');
console.log('public/og.png written');
