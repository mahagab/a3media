// content/config.ts
import { defineCollection, z } from "astro:content";

const paginatemplate1 = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    buttonUrl: z.string(),
    buttonText: z.string(),
    body: z.string(),
  }),
});

const paginatemplate2 = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    body: z.string(),
  }),
});

export const collections = {
  paginatemplate1,
  paginatemplate2,
};
