// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "M_W",
  tagline: " ",
  favicon: "img/favicon.png",
  url: "https://aksen123.github.io",
  baseUrl: "/M_W_blog",
  organizationName: "aksen123", // Usually your GitHub org/user name.
  projectName: "M_W_blog", // Usually your repo name.
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: "./sidebars.js",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "/img/ms2.jpg",
      description: "",
      metadata: [
        { name: "keywords", content: "M_W, blog" },
        { name: "og:title", content: "이것저것 끄적끄적" },
        // {
        //   property: "og:image",
        //   content: "/img/ms2.jpg",
        // },
      ],
      navbar: {
        title: "일단 기록하자",
        logo: {
          alt: "M_W Blog",
          src: "img/favicon2.png",
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "tutorialSidebar",
            position: "left",
            label: "끄적끄적",
          },
          { to: "/docs/tags", label: "Tags", position: "left" },
          {
            href: "https://github.com/aksen123",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
