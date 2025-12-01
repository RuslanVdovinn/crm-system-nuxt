
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-11-29',
  devtools: { enabled: false },
  modules: [
    '@nuxt/image',
    '@nuxtjs/tailwindcss',
    'shadcn-nuxt',
    [
      '@nuxtjs/google-fonts',
      {
        families: {
          Lato: {
            wght: [300, 400, 700],
            ital: [300],
          }
        }
      }
    ],
    '@nuxt/icon',
  ],
  css: ['./app/assets/css/main.css'],
  shadcn: {
    prefix: 'Ui',
    componentDir: './app/components/ui'
  }
})