/** ORCID iDs of known co-authors, keyed by the name as written in publications. */
export const authorOrcids: Record<string, string> = {
  'Lara-Gutiérrez, A.': '0009-0009-0796-4631',
  'Onieva, J. A.': '0000-0002-7280-090X',
  'Fernández-Gago, C.': '0000-0002-4564-6636',
};

export const orcidUrl = (id: string) => `https://orcid.org/${id}`;
