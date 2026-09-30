/**
 * Gallery photos, hosted on Flickr and grouped by country (shown in this order).
 * Each photo comes from a Flickr embed code: `page` is the photo's Flickr URL (the
 * embed's href) and `src` the image URL (the embed's <img src>), with its size.
 * Countries without photos show a placeholder.
 */
export interface Photo {
  title: string;
  page: string;
  src: string;
  width: number;
  height: number;
}

export interface Country {
  slug: string;
  name: string;
  /** ISO 3166 code; the SVG lives in public/flags/. */
  flag: string;
  photos: Photo[];
}

export const countries: Country[] = [
  { slug: 'spain', name: 'Spain', flag: 'es', photos: [] },
  { slug: 'austria', name: 'Austria', flag: 'at', photos: [] },
  { slug: 'czech-republic', name: 'Czech Republic', flag: 'cz', photos: [] },
  { slug: 'germany', name: 'Germany', flag: 'de', photos: [] },
  { slug: 'hungary', name: 'Hungary', flag: 'hu', photos: [] },
  { slug: 'south-korea', name: 'South Korea', flag: 'kr', photos: [] },
  { slug: 'australia', name: 'Australia', flag: 'au', photos: [] },
  { slug: 'new-zealand', name: 'New Zealand', flag: 'nz', photos: [] },
  { slug: 'singapore', name: 'Singapore', flag: 'sg', photos: [] },
];
