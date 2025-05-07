import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "VPN NowMeow Docs",
  description: " ",
  markdown: {
    theme: {
      light: "catppuccin-latte",
      dark: "catppuccin-mocha",
    },
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    search: {
      provider: 'local'
    },
    siteTitle: 'NowMeow Docs',
    logo: '/nowmeowpage/logo.svg',
    nav: [
      { text: 'Главная', link: '/' },
      { text: 'Примеры', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Примеры',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'telegram', link: 'https://github.com/vuejs/vitepress' }
    ]
  },
  base: '/nowmeowpage/',
  lang: 'ru-RU',
})

