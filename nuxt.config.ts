export default defineNuxtConfig({
  compatibilityDate: '2024-12-23',
  future: { compatibilityVersion: 4 },
  modules: ['@nuxthub/core', '@nuxtjs/tailwindcss'],
  hub: {},
  css: [
    '~/assets/css/main.css',
    '~/assets/css/projects.css'
  ],
  app: {
    head: {
      title: 'dimroc experiments',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { property: 'og:title', content: 'experiments.dimroc' },
        { property: 'og:image', content: '/images/CrowdCountiOS.experiment.gif' },
        { name: 'google-site-verification', content: 'KFJOcbe4F4sAQcx11yd_6hmxu0DVdy6ZgI7y6TFK8VU' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  },
  nitro: {
    preset: 'cloudflare-pages'
  }
})
