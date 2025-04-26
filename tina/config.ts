import { defineConfig } from "tinacms";

export default defineConfig({
  branch: "main", // ou a sua branch
  clientId: "", // deixe vazio se for Local Mode
  token: "",    // deixe vazio se for Local Mode
  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "uploads",
      publicFolder: "public",
    },
  },
  schema: {
    collections: [
      {
        name: "post",
        label: "Posts",
        path: "content/posts",
        format: "md",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
        ],
      },
      {
        name: "paginatemplate1",
        label: "Páginas Template 1",
        path: "src/pages/paginatemplate1",
        format: "md",
        fields: [
          {
            type: "string",
            name: "numero",
            label: "Número da Página",
            required: true,
          },
        ],
        ui: {
          filename: {
            slugify: (values) => `${values.numero}`,
          },
          router: ({ document }) => `/paginatemplate1/${document._sys.filename}`,
        },
      },
      {
        name: "paginatemplate2",
        label: "Páginas Template 2",
        path: "src/pages/paginatemplate2",
        format: "md",
        fields: [
          {
            type: "string",
            name: "numero",
            label: "Número da Página",
            required: true,
          },
        ],
        ui: {
          filename: {
            slugify: (values) => `${values.numero}`,
          },
          router: ({ document }) => `/paginatemplate2/${document._sys.filename}`,
        },
      },
    ],
  },
});
