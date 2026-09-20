import { defineCollection, z } from 'astro:content';

const articlesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.enum([
      'home-decor',
      'rooms',
      'furniture-styling',
      'organization-storage',
      'small-space-living',
      'apartments',
      'entryways-hallways',
      'awkward-spaces',
      'outdoor-garden',
      'seasonal-home',
    ]),
    subcategory: z.string(),
    author: z.string().default('The House Chapter Editorial'),
    authorRole: z.string().default('Interiors & Styling Editors'),
    publishedAt: z.string(),
    updatedAt: z.string().optional(),
    heroImage: z.string(),
    heroImageAlt: z.string(),
    featured: z.boolean().default(false),
    specialty: z.boolean().default(false),
    readingTime: z.string().default('5 min read'),
    keywords: z.array(z.string()).default([]),
    tags: z.array(z.string()).default([]),
    socialImage: z.string().optional(),
    socialImageAlt: z.string().optional(),
    faq: z.array(
      z.object({
        question: z.string(),
        answer: z.string(),
      })
    ).default([]),
    relatedArticles: z.array(z.string()).default([]),
    practicalTips: z.array(z.string()).optional(),
    mistakesToAvoid: z.array(z.string()).optional(),
  }),
});

export const collections = {
  articles: articlesCollection,
};
