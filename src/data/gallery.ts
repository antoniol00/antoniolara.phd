/**
 * Gallery photos, hosted on Flickr and grouped by country (shown in this order).
 * Each photo comes from a Flickr embed code: `page` is the photo's Flickr URL (the
 * embed's href) and `src` the image URL (the embed's <img src>), with its size.
 * Countries without photos are hidden.
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
  flag: string;
  photos: Photo[];
}

export const countries: Country[] = [
  { slug: 'spain', name: 'Spain', flag: '🇪🇸', photos: [] },
  { slug: 'austria', name: 'Austria', flag: '🇦🇹', photos: [] },
  { slug: 'czech-republic', name: 'Czech Republic', flag: '🇨🇿', photos: [] },
  { slug: 'germany', name: 'Germany', flag: '🇩🇪', photos: [] },
  { slug: 'hungary', name: 'Hungary', flag: '🇭🇺', photos: [] },
  { slug: 'south-korea', name: 'South Korea', flag: '🇰🇷', photos: [] },
  { slug: 'australia', name: 'Australia', flag: '🇦🇺', photos: [] },
  { slug: 'new-zealand', name: 'New Zealand', flag: '🇳🇿', photos: [] },
  { slug: 'singapore', name: 'Singapore', flag: '🇸🇬', photos: [] },
];
