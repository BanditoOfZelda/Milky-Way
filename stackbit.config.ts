// stackbit.config.ts
import { defineStackbitConfig } from "@stackbit/types";
import { GitContentSource } from "@stackbit/cms-git";

export default defineStackbitConfig({
  contentSources: [
    new GitContentSource({
      rootPath: __dirname,
      contentDirs: ["src/content", "src/pages"], // Include both content and page files
      models: [
        // Blog Post Model
        {
          name: "BlogPost",
          type: "page",
          urlPath: "/posts/{slug}", // Matches [...slug].astro routing
          filePath: "src/content/posts/{slug}.md", // Blog Markdown files
          fields: [
            { name: "title", type: "string", required: true, label: "Title" },
            { name: "date", type: "datetime", required: true, label: "Publish Date" },
            { name: "tags", type: "list", required: false, label: "Tags" },
            { name: "body", type: "markdown", required: true, label: "Content" },
          ],
        },
        // Static Page Model
        {
          name: "Page",
          type: "page",
          urlPath: "/{slug}",
          filePath: "src/pages/{slug}.md", // Adjust if needed
          fields: [
            { name: "title", type: "string", required: true, label: "Page Title" },
            { name: "body", type: "markdown", required: true, label: "Page Content" },
          ],
        },
      ],
    }),
  ],
});
