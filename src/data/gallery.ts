/**
 * Optional metadata for gallery countries. Keys are folder names under
 * src/assets/gallery/. Countries without an entry still appear, named after the folder.
 */
export interface CountryInfo {
  name: string;
  description?: string;
  /** Captions keyed by file name (e.g. "lake-taupo.jpg"). */
  captions?: Record<string, string>;
  /** Lower numbers appear first; defaults to alphabetical order. */
  order?: number;
}

export const countries: Record<string, CountryInfo> = {
  'new-zealand': { name: 'New Zealand' },
  spain: { name: 'Spain' },
};
