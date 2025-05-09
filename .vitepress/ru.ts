import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'ru-RU',
  title: "NowMeow Docs",
  description: " ",
  markdown: {
    theme: {
      light: "catppuccin-latte",
      dark: "catppuccin-mocha",
    },
  },

  locales: {
    root: {
      label: 'Русский',
      lang: 'ru'
    },
    ru: {
      label: 'English',
      lang: 'en', 
      link: '/en/' 
    }
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    siteTitle: 'NowMeow Docs',
    logo: './logo.svg',
    nav: [
      { text: 'О нас', link: '/' },
      { text: 'Частые вопросы', link: '/faq/faq-info' },
      { 
        text: 'Инструкции',
        items: [
          { text: 'IOS', link: '/devices/ios' },
          { text: 'MacOs', link: '/devices/macos' },
          { text: 'Android', link: '/devices/android' },
          { text: 'Android TV', link: '/devices/android-tv' },
          { text: 'Windows', link: '/devices/windows' },
          { text: 'Windows NekoRay/NekoBox', link: '/devices/windows-nekoray' },
          { text: 'Linux', link: '/devices/linux' },
        ]
      }
    ],

    sidebar: {
      '/faq/': [
        {
          text: 'Частые вопросы',
          items: [
            { text: 'Вопросы', link: '/faq/faq-info' }
          ]
        }
      ],
      '/devices/': [
        {
          text: 'Инструкции',
          items: [
            { text: 'IOS', link: '/devices/ios' },
            { text: 'MacOs', link: '/devices/macos' },
            { text: 'Android', link: '/devices/android' },
            { text: 'Android TV', link: '/devices/android-tv' },
            { text: 'Windows', link: '/devices/windows' },
            { text: 'Windows NekoRay/NekoBox', link: '/devices/windows-nekoray' },
            { text: 'Linux', link: '/devices/linux' },
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'telegram', link: 'https://t.me/VPN_nowmeow_bot' }
    ],
    search: {
    provider: 'local',
    options: {
        translations: {
        button: {
            buttonText: 'Поиск',
            buttonAriaLabel: 'Поиск'
        },
        modal: {
            noResultsText: 'Результатов не найдено',
            resetButtonTitle: 'Очистить поиск',
            footer: {
            selectText: 'выбрать',
            navigateText: 'перейти',
            closeText: 'закрыть'
            }
        }
        }
    }
    },

    outline: {
      label: 'Содержание страницы'
    },

    docFooter: {
      prev: 'Предыдущая',
      next: 'Следующая'
    },

    notFound: {
      title: 'СТРАНИЦА НЕ НАЙДЕНА',
      quote: 'Похоже, здесь ничего нет...',
      linkLabel: 'Вернуться на главную',
      linkText: 'Домой'
    },

    darkModeSwitchLabel: 'Тема',
    lightModeSwitchTitle: 'Светлая тема',
    darkModeSwitchTitle: 'Тёмная тема',
    sidebarMenuLabel: 'Меню',
    returnToTopLabel: 'Наверх',
    langMenuLabel: 'Язык',
    skipToContentLabel: 'Перейти к содержанию'
  },
  
  lastUpdated: true
})

