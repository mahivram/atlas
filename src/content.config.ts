import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
	loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		tags: z.array(z.string()).default([]),
		draft: z.boolean().default(false),
	}),
});

const projects = defineCollection({
	loader: glob({ base: './src/content/projects', pattern: '**/index.md' }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		date: z.coerce.date(),
		status: z.enum(['active', 'completed', 'archived']),
		tags: z.array(z.string()),
		featured: z.boolean().default(false),
		repo: z.string().url().optional(),
		demo: z.string().url().optional(),
		group: z.string().default('Overview'),
		order: z.number().int().default(0),
	}),
});

const projectSections = defineCollection({
	loader: glob({ base: './src/content/projects', pattern: '**/sections/*.{md,mdx}' }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		group: z.string(),
		order: z.number().int(),
	}),
});

export const collections = { blog, projects, projectSections };
