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
