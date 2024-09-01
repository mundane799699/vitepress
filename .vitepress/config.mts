import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "理想是自由",
  description: "理想是自由的博客",
  head: [["link", { rel: "icon", href: "/favicon.ico" }]],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    search: {
      provider: "local",
    },
    nav: [
      { text: "Home", link: "/" },
      { text: "Examples", link: "/examples/markdown-examples" },
    ],

    sidebar: {
      tech: [
        {
          items: [
            {
              text: "尝试在现有next.js项目中集成shadcn遇到的坑",
              link: "/tech/shadcn-nextjs-integration-problems",
            },
            {
              text: "(转)怎么学习开发网站",
              link: "/tech/how-to-learn-website-development",
            },
            {
              text: "VSCode解决终端的中文乱码问题",
              link: "/tech/vscode-terminal-Chinese-garbled-characters",
            },
            {
              text: "electron开发之mac签名和公证",
              link: "/tech/electron-mac-sign",
            },
            {
              text: "记一次线上mysql启动失败的问题",
              link: "/tech/mysql-error",
            },
            {
              text: "如何用vitepress+cloudflare pages搭建博客",
              link: "/tech/vitepress-blog",
            },
          ],
        },
      ],
      other: [
        {
          items: [
            {
              text: "出海基本功之如何使用semrush寻找关键词机会",
              link: "/other/how-to-use-semrush-to-find-opportunities",
            },
            {
              text: "【播客笔记】蛋壳的出海赚美金经历访谈",
              link: "/other/note-danke-overseas-podcast",
            },
            {
              text: "注册谷歌云获取300刀赠金配合lobechat免费使用claude3.5(需绑卡)",
              link: "/other/register-gcp-get-claude3.5-free",
            },
            {
              text: "闲鱼学习法",
              link: "/other/xianyu-based-learning",
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
