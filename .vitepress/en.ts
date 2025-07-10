import { defineConfig } from 'vitepress'

const localePrefix = '/en'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'en-US',
  themeConfig: {
    search: {
      provider: 'local'
    },
    siteTitle: 'NowMeow Docs',
    logo: '/logo.svg',
    nav: [
      { text: 'About Us', link: `${localePrefix}/` },
      { text: 'FAQ', link: `${localePrefix}/faq/` },
      {
        text: 'Guides',
        items: [
          { text: 'iOS', link: `${localePrefix}/devices/ios` },
          { text: 'macOS', link: `${localePrefix}/devices/macos` },
          { text: 'Android', link: `${localePrefix}/devices/android` },
          { text: 'Android TV', link: `${localePrefix}/devices/android-tv` },
          { text: 'Windows', link: `${localePrefix}/devices/windows` },
          { text: 'Windows NekoRay/NekoBox', link: `${localePrefix}/devices/windows-nekoray` },
          { text: 'Linux', link: `${localePrefix}/devices/linux` }
        ]
      }
    ],
    sidebar: {
      [`${localePrefix}/faq/`]: [
        {
          text: 'FAQ',
          items: [
            { text: 'Questions', link: `${localePrefix}/faq` }
          ]
        }
      ],
      [`${localePrefix}/devices/`]: [
        {
          text: 'Guides',
          items: [
            { text: 'iOS', link: `${localePrefix}/devices/ios` },
            { text: 'macOS', link: `${localePrefix}/devices/macos` },
            { text: 'Android', link: `${localePrefix}/devices/android` },
            { text: 'Android TV', link: `${localePrefix}/devices/android-tv` },
            { text: 'Windows', link: `${localePrefix}/devices/windows` },
            { text: 'Windows NekoRay/NekoBox', link: `${localePrefix}/devices/windows-nekoray` },
            { text: 'Linux', link: `${localePrefix}/devices/linux` }
          ]
        }
      ]
    },
    socialLinks: [
      { icon: 'telegram', link: 'https://t.me/VPN_nowmeow_bot' }
    ]
  }
})
