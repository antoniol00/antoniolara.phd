import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const publications = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/publications' }),
  schema: ({ image }) =>
    z.object({
      /** Citation key as it appears in the CV, e.g. "J1". */
      key: z.string(),
      type: z.enum(['journal', 'conference']),
      title: z.string(),
      /** English translation when the original title is in another language. */
      titleEn: z.string().optional(),
      authors: z.array(z.string()),
      venue: z.string(),
      details: z.string().optional(),
      year: z.number(),
      abbr: z.string().optional(),
      /** Journal cover, or conference/publisher logo when no cover exists. */
      cover: image().optional(),
      jcr: z
        .object({
          quartile: z.string(),
          impactFactor: z.number(),
        })
        .optional(),
      doi: z.string().optional(),
      pdf: z.string().optional(),
      url: z.url().optional(),
      /** Conference or journal website. */
      venueUrl: z.url().optional(),
      /** Source code repository. */
      code: z.url().optional(),
      selected: z.boolean().default(false),
    }),
});

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    year: z.number(),
    tags: z.array(z.string()).default([]),
    repo: z.url().optional(),
    links: z.array(z.object({ label: z.string(), href: z.url() })).default([]),
    /** Keys of related publications (e.g. "J4"). */
    publications: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
  }),
});

/** YAML turns "2026-03-17" into a Date; keep dates as "YYYY-MM[-DD]" strings. */
const isoDay = (v: unknown) => (v instanceof Date ? v.toISOString().slice(0, 10) : v);

const activities = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/activities' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      /** One-line version used on the home page. */
      summary: z.string(),
      /** "YYYY-MM-DD", or "YYYY-MM" when the exact day is not relevant. */
      date: z.preprocess(isoDay, z.string().regex(/^\d{4}-\d{2}(-\d{2})?$/)),
      /** Last day of multi-day events ("YYYY-MM-DD"). */
      endDate: z.preprocess(isoDay, z.string().regex(/^\d{4}-\d{2}-\d{2}$/)).optional(),
      category: z.enum(['award', 'talk', 'conference', 'publication', 'research-stay', 'teaching', 'other']),
      location: z.string().optional(),
      image: image().optional(),
      links: z.array(z.object({ label: z.string(), href: z.url() })).default([]),
      /** Keys of related publications (e.g. "C1"). */
      publications: z.array(z.string()).default([]),
    }),
});

export const collections = { publications, projects, activities };
