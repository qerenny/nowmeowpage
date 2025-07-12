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
    nav: [
      { text: 'О нас', link: `${localePrefix}/` },
      {
        text: 'Частые вопросы',
        items: [
          { text: 'Что такое NowMeow VPN и как он работает?', link: `${localePrefix}/faq/how-it-works` },
          { text: 'Как начать использовать NowMeow VPN?', link: `${localePrefix}/faq/how-to-start` },
          { text: 'Какие преимущества NowMeow VPN?', link: `${localePrefix}/faq/advantages` },
          { text: 'Сохраняете ли вы логи моей активности?', link: `${localePrefix}/faq/logs-policy` },
          { text: 'Сколько стоит использование NowMeow VPN?', link: `${localePrefix}/faq/pricing` },
          { text: 'Как получить бесплатные дни подписки?', link: `${localePrefix}/faq/free-days` },
          { text: 'На каком протоколе работает VPN?', link: `${localePrefix}/faq/protocol` },
          { text: 'Могу ли я использовать NowMeow VPN на нескольких устройствах?', link: `${localePrefix}/faq/multiple-devices` },
          { text: 'Что делать, если возникли проблемы с подключением?', link: `${localePrefix}/faq/troubleshooting` },
        ]
      },
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
            { text: 'Что такое NowMeow VPN и как он работает?', link: `${localePrefix}/faq/how-it-works` },
            { text: 'Как начать использовать NowMeow VPN?', link: `${localePrefix}/faq/how-to-start` },
            { text: 'Какие преимущества NowMeow VPN?', link: `${localePrefix}/faq/advantages` },
            { text: 'Сохраняете ли вы логи моей активности?', link: `${localePrefix}/faq/logs-policy` },
            { text: 'Сколько стоит использование NowMeow VPN?', link: `${localePrefix}/faq/pricing` },
            { text: 'Как получить бесплатные дни подписки?', link: `${localePrefix}/faq/free-days` },
            { text: 'На каком протоколе работает VPN?', link: `${localePrefix}/faq/protocol` },
            { text: 'Могу ли я использовать NowMeow VPN на нескольких устройствах?', link: `${localePrefix}/faq/multiple-devices` },
            { text: 'Что делать, если возникли проблемы с подключением?', link: `${localePrefix}/faq/troubleshooting` },
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
