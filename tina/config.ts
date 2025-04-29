import { defineConfig } from "tinacms";
export default defineConfig({
  branch: "main", // ou a sua branch
  clientId: "",   // deixe vazio se for Local Mode
  token: "",      // deixe vazio se for Local Mode
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
      // ⚡️ REMOVE completamente as collections de paginatemplate1 e paginatemplate2
    ],
  },
});
