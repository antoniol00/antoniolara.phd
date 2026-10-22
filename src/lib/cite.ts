import { publicationLink, type Publication } from './publications';

type Pub = Publication['data'];

export interface Citation {
  /** BibTeX key, also used as the download file name. */
  key: string;
  bibtex: string;
  text: string;
}

/** Words kept lowercase in title case unless they open the title or a subtitle. */
const SMALL = new Set([
  'a', 'an', 'the', 'and', 'but', 'or', 'nor', 'for', 'so', 'yet',
  'as', 'at', 'by', 'in', 'of', 'on', 'to', 'up', 'via', 'vs', 'from', 'into', 'with',
]);

const upperFirst = (s: string) => s.replace(/\p{L}/u, (c) => c.toUpperCase());
const bare = (s: string) => s.replace(/[^\p{L}\p{N}]/gu, '').toLowerCase();

/** Strip diacritics, as publishers do in citation metadata ("Gutiérrez" → "Gutierrez"). */
const fold = (s: string) => s.normalize('NFD').replace(/\p{M}/gu, '');

/** "A class-specific adaptive GAN framework" → "A Class-Specific Adaptive GAN Framework". */
export function titleCase(title: string): string {
  let opening = true;
  return title
    .split(/(\s+)/)
    .map((token) => {
      if (!token.trim()) return token;
      const word = token
        .split('-')
        .map((part, i) => (SMALL.has(bare(part)) && (i > 0 || !opening) ? part : upperFirst(part)))
        .join('-');
      opening = /[:?!.]$/.test(token);
      return word;
    })
    .join('');
}

/** "Venue Name (Publisher)" → ["Venue Name", "Publisher"]; only journals carry the publisher. */
function splitVenue(pub: Pub): [string, string | undefined] {
  const m = pub.type === 'journal' ? pub.venue.match(/^(.*?)\s*\(([^)]+)\)$/) : null;
  return m ? [m[1], m[2]] : [pub.venue, undefined];
}

interface Source {
  venue: string;
  publisher?: string;
  volume?: string;
  article?: string;
  pages?: string;
}

/** Journal details are written "volume, article"; conference details end with "pp. a–b". */
function source(pub: Pub): Source {
  const [venue, publisher] = splitVenue(pub);
  if (pub.type === 'journal') {
    const [volume, article] = pub.details?.split(/,\s*/) ?? [];
    return { venue, publisher, volume, article };
  }
  return { venue, publisher, pages: pub.details?.match(/pp\.\s*(\d+\s*[–-]+\s*\d+)/)?.[1] };
}

/** Original-language titles (those with a translation) keep their own capitalisation. */
const citedTitle = (pub: Pub) => (pub.titleEn ? pub.title : titleCase(pub.title));

function citationKey(pub: Pub): string {
  const family = bare(fold(pub.authors[0].split(',')[0]));
  const word = pub.title.split(/\s+/).map((w) => bare(fold(w))).find((w) => w && !SMALL.has(w)) ?? '';
  return `${family}${pub.year}${word}`;
}

/* ---------- plain text ---------- */

/** "Lara-Gutierrez, A., Fernandez-Gago, C. & Onieva, J.A." */
function textAuthors(authors: string[]): string {
  const names = authors.map((a) => fold(a).replace(/\.\s+(?=\p{Lu}\.)/gu, '.'));
  return names.length > 1 ? `${names.slice(0, -1).join(', ')} & ${names.at(-1)}` : names[0];
}

function textCitation(pub: Pub): string {
  const s = source(pub);
  const title = citedTitle(pub);
  const where =
    pub.type === 'journal'
      ? `${s.venue}${s.volume ? ` ${[s.volume, s.article].filter(Boolean).join(', ')}` : ''} (${pub.year}).`
      : `In ${s.venue}${s.pages ? `, pp. ${s.pages}` : ''} (${pub.year}).`;
  const link = publicationLink(pub);
  return [`${textAuthors(pub.authors)} ${title}${/[.?!]$/.test(title) ? '' : '.'}`, where, link]
    .filter(Boolean)
    .join(' ');
}

/* ---------- BibTeX ---------- */

const ACCENTS: Record<string, string> = {
  '́': "'",
  '̀': '`',
  '̂': '^',
  '̈': '"',
  '̃': '~',
  '̧': 'c',
};

/** Escape for (pdf)LaTeX so entries work without UTF-8 support. */
function latex(s: string): string {
  return s
    .replace(/[&%$#_]/g, '\\$&')
    .replace(/—/g, '---')
    .replace(/–/g, '--')
    .normalize('NFD')
    .replace(/(\p{L})(\p{M})/gu, (all, c: string, mark: string) => {
      const cmd = ACCENTS[mark];
      if (!cmd) return all;
      return cmd === 'c' ? `{\\c{${c}}}` : `{\\${cmd}${c}}`;
    })
    .normalize('NFC');
}

/** Brace words with several capitals (NIDS, GenPot…) so BibTeX styles keep their case. */
const protect = (s: string) => s.replace(/[\p{L}\p{N}]*\p{Lu}[\p{L}\p{N}]*\p{Lu}[\p{L}\p{N}]*/gu, '{$&}');

function bibtex(pub: Pub, key: string): string {
  const s = source(pub);
  const doiUrl = pub.doi ? undefined : publicationLink(pub);
  const fields: [string, string | undefined][] = [
    ['author', pub.authors.map(fold).join(' and ')],
    ['title', latex(protect(citedTitle(pub)))],
    pub.type === 'journal' ? ['journal', latex(s.venue)] : ['booktitle', latex(protect(s.venue))],
    ['volume', s.volume],
    ['pages', s.article ?? (s.pages && latex(s.pages.replace(/\s+/g, '')))],
    ['year', String(pub.year)],
    ['publisher', s.publisher && latex(s.publisher)],
    ['doi', pub.doi],
    ['url', doiUrl],
  ];
  const present = fields.filter((f): f is [string, string] => Boolean(f[1]));
  const width = Math.max(...present.map(([name]) => name.length));
  const body = present.map(([name, value]) => `  ${name.padEnd(width)} = {${value}}`).join(',\n');
  return `@${pub.type === 'journal' ? 'article' : 'inproceedings'}{${key},\n${body}\n}`;
}

export function citation(pub: Pub): Citation {
  const key = citationKey(pub);
  return { key, bibtex: bibtex(pub, key), text: textCitation(pub) };
}
