import { getCollection, type CollectionEntry } from 'astro:content';

export type Publication = CollectionEntry<'publications'>;

export const publicationTypes = {
  journal: 'Journal Articles',
  conference: 'National Conferences',
} as const;

const typeOrder = Object.keys(publicationTypes);

/** Newest year first; within a year, journals before conferences, then by key. */
export async function getPublications(): Promise<Publication[]> {
  const items = await getCollection('publications');
  return items.sort(
    (a, b) =>
      b.data.year - a.data.year ||
      typeOrder.indexOf(a.data.type) - typeOrder.indexOf(b.data.type) ||
      b.data.key.localeCompare(a.data.key, undefined, { numeric: true }),
  );
}

/** Short human label per publication key, e.g. "J4" → "APIN 2026", "C1" → "RECSI 2026". */
export async function getPublicationLabels(): Promise<Map<string, string>> {
  const items = await getCollection('publications');
  return new Map(
    items.map(({ data }) => {
      const abbr = data.abbr ?? data.key;
      return [data.key, /\d{4}/.test(abbr) ? abbr : `${abbr} ${data.year}`];
    }),
  );
}
