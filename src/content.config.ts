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
      selected: z.boolean().default(false),
    }),
});

export const collections = { publications };
