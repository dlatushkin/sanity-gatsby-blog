export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "607fdf165bf2d2cc0e0d346c",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-6k6dxizr",
                  apiId: "049d432e-5732-4a93-92d2-6ab3611f703d",
                },
                {
                  buildHookId: "607fdf168616efd1982a9259",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-bxj9sekw",
                  apiId: "29820498-a215-48be-9fec-73e31086595e",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/dlatushkin/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-bxj9sekw.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
