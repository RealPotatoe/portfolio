import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { file } from "astro/loaders";

const localized = z.object({
    en: z.string(),
    de: z.string(),
});

const localizedList = z.object({
    en: z.array(z.string()),
    de: z.array(z.string()),
});

const projects = defineCollection({
    loader: file("src/data/projects.json"),
    schema: z.object({
        order: z.number(),
        icon: z.string(),
        tags: z.array(z.string()),
        link: z
            .object({
                href: z.string(),
                kind: z.enum(["code", "site"]),
            })
            .optional(),
        title: localized,
        text: localized,
    }),
});

const timeline = defineCollection({
    loader: file("src/data/timeline.json"),
    schema: z.object({
        order: z.number(),
        icon: z.string(),
        date: localized,
        current: z.boolean().default(false),
        title: localized,
        company: localized,
        milestone: localized.optional(),
        highlights: localizedList.optional(),
        detail_label: localized.optional(),
        detail: localized.optional(),
    }),
});

export const collections = { projects, timeline };
