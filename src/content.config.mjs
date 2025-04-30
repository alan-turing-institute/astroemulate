import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
    schema: z.object({
        title: z.string(),
        pubDate: z.preprocess((val) => new Date(val), z.date()),
        description: z.string().optional(),
        author: z.string().optional(),
        release: z.string().optional(),
    }),
});

export const collections = { blog };