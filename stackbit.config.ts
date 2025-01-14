// stackbit.config.ts
import { defineStackbitConfig } from "@stackbit/types";
import { GitContentSource } from "@stackbit/cms-git";

export default defineStackbitConfig({
  contentSources: [
    new GitContentSource({
      rootPath: __dirname,
      contentDirs: ["src/content/posts"], // Path to blog posts
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
      ],
    }),
  ],
});
