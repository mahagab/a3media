import { defineCollection, z } from "@astrojs/content-collections";

const paginatemplate1 = defineCollection({
  type: "content",
  schema: z.object({
    numero: z.string(),
  }),
});

const paginatemplate2 = defineCollection({
  type: "content",
  schema: z.object({
    numero: z.string(),
  }),
});

export const collections = {
  paginatemplate1,
  paginatemplate2,
};
