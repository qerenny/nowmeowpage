import { defineConfig } from 'vitepress'
import ru from './ru'
import en from './en'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  locales: {
    root: {
      label: 'Русский',
      title: 'NowMeow Документация',
      lang: 'ru-RU',
      ...ru
    },
    en: {
      label: 'English',
      lang: 'en-US',
      title: 'NowMeow Docs',
      link: '/en/',
      ...en
    }
  },
  markdown: {
    theme: {
      light: 'catppuccin-latte',
      dark: 'catppuccin-mocha'
    }
  }
})

