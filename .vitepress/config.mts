import { defineConfig } from 'vitepress'
import ru from './ru'
import en from './en'

export default defineConfig({
  locales: {
    root: {
      label: 'Русский',
      title: 'NowMeow Документация',
      lang: 'ru-RU',
      link: '/ru/',
      ...ru
    },
    en: {
      label: 'English',
      lang: 'en-US',
      title: 'NowMeow Docs',
      link: '/en/',
      ...en
    },
    cn: {
      label: '中国人',
      lang: 'cn-CN',
      title: 'NowMeow Docs',
      link: '/cn/',
      ...en
    }
  },
  markdown: {
    theme: {
      light: 'catppuccin-latte',
      dark: 'catppuccin-mocha'
    }
  },
})

