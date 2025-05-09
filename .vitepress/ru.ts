import { defineConfig } from 'vitepress'

const localePrefix = '/ru'

export default defineConfig({
  lang: 'ru-RU',
  markdown: {
    theme: {
      light: "catppuccin-latte",
      dark: "catppuccin-mocha",
    },
  },

  themeConfig: {
    siteTitle: 'NowMeow Docs',
    logo: './logo.svg',
    nav: [
      { text: 'О нас', link: `${localePrefix}/` },
      { text: 'Частые вопросы', link: `${localePrefix}/faq/faq-info` },
      { 
        text: 'Инструкции',
        items: [
          { text: 'IOS', link: `${localePrefix}/devices/ios` },
          { text: 'MacOs', link: `${localePrefix}/devices/macos` },
          { text: 'Android', link: `${localePrefix}/devices/android` },
          { text: 'Android TV', link: `${localePrefix}/devices/android-tv` },
          { text: 'Windows', link: `${localePrefix}/devices/windows` },
          { text: 'Windows NekoRay/NekoBox', link: `${localePrefix}/devices/windows-nekoray` },
          { text: 'Linux', link: `${localePrefix}/devices/linux` },
        ]
      }
    ],

    sidebar: {
      [`${localePrefix}/faq/`]: [
        {
          text: 'Частые вопросы',
          items: [
            { text: 'Вопросы', link: `${localePrefix}/faq/faq-info` }
          ]
        }
      ],
      [`${localePrefix}/devices/`]: [
        {
          text: 'Инструкции',
          items: [
            { text: 'IOS', link: `${localePrefix}/devices/ios` },
            { text: 'MacOs', link: `${localePrefix}/devices/macos` },
            { text: 'Android', link: `${localePrefix}/devices/android` },
            { text: 'Android TV', link: `${localePrefix}/devices/android-tv` },
            { text: 'Windows', link: `${localePrefix}/devices/windows` },
            { text: 'Windows NekoRay/NekoBox', link: `${localePrefix}/devices/windows-nekoray` },
            { text: 'Linux', link: `${localePrefix}/devices/linux` },
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
