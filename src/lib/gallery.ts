import type { ImageMetadata } from 'astro';
import { countries } from '../data/gallery';

const files = import.meta.glob<{ default: ImageMetadata }>(
  '../assets/gallery/*/*.{jpg,jpeg,png,webp,avif,JPG,JPEG,PNG,WEBP,AVIF}',
  { eager: true },
);

export interface Photo {
  src: ImageMetadata;
  file: string;
  caption: string;
}

export interface CountryGroup {
  slug: string;
  name: string;
  description?: string;
  photos: Photo[];
}

const titleCase = (slug: string) =>
  slug.replace(/[-_]+/g, ' ').replace(/^\w/, (c) => c.toUpperCase());

const captionFromFile = (file: string) =>
  titleCase(file.replace(/\.[^.]+$/, '').replace(/^\d+[-_ ]*/, ''));

export function getGallery(): CountryGroup[] {
  const groups = new Map<string, CountryGroup>();

  for (const [path, mod] of Object.entries(files)) {
    const [slug, file] = path.split('/').slice(-2);
    const info = countries[slug];
    if (!groups.has(slug)) {
      groups.set(slug, {
        slug,
        name: info?.name ?? titleCase(slug),
        description: info?.description,
        photos: [],
      });
    }
    groups.get(slug)!.photos.push({
      src: mod.default,
      file,
      caption: info?.captions?.[file] ?? captionFromFile(file),
    });
  }

  for (const g of groups.values()) g.photos.sort((a, b) => a.file.localeCompare(b.file));

  return [...groups.values()].sort(
    (a, b) =>
      (countries[a.slug]?.order ?? Infinity) - (countries[b.slug]?.order ?? Infinity) ||
      a.name.localeCompare(b.name),
  );
}
