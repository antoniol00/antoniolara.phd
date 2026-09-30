import { countries, type Photo } from '../data/gallery';

/*
 * Flickr serves every photo at fixed sizes that share the same secret up to 1024px,
 * selected by a suffix: _z (640), _c (800), _b (1024). Larger sizes (_h, _k, _o) use a
 * different secret, so they are only used when the embed already points at them.
 */
const SIZED = /_(?:[a-z])\.(jpe?g|png)$/i;
const base = (src: string) => src.replace(SIZED, '').replace(/\.(jpe?g|png)$/i, '');
const ext = (src: string) => src.match(/\.(jpe?g|png)$/i)?.[1] ?? 'jpg';

/** ~800px version for the grid. */
export const thumbUrl = (src: string) => `${base(src)}_c.${ext(src)}`;

/** Largest version we can safely build for the lightbox. */
export const fullUrl = (src: string) =>
  /_[hko]\.(jpe?g|png)$/i.test(src) ? src : `${base(src)}_b.${ext(src)}`;

export interface GalleryPhoto extends Photo {
  thumb: string;
  full: string;
}

export function getGallery() {
  return countries
    .filter((c) => c.photos.length > 0)
    .map((c) => ({
      ...c,
      photos: c.photos.map<GalleryPhoto>((p) => ({ ...p, thumb: thumbUrl(p.src), full: fullUrl(p.src) })),
    }));
}
