import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "理想是自由",
  description: "理想是自由的博客",
  head: [["link", { rel: "icon", href: "/favicon.ico" }]],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Examples", link: "/examples/markdown-examples" },
    ],

    sidebar: {
      tech: [
        {
          items: [
            {
              text: "如何用vitepress+cloudflare pages搭建博客",
              link: "/tech/vitepress-blog",
            },
            {
              text: "记一次线上mysql启动失败的问题, Starting MySQL..The server quit without updating PID file ([FAILED]sql/mysql.pid).",
              link: "/tech/mysql-error",
            },
          ],
        },
      ],
      examples: [
        {
          text: "Examples",
          items: [
            {
              text: "Markdown Examples",
              link: "/examples/markdown-examples",
            },
            {
              text: "API Examples",
              link: "/examples/api-examples",
            },
          ],
        },
      ],
    },

    socialLinks: [{ icon: "github", link: "https://github.com/mundane799699" }],
  },
});
