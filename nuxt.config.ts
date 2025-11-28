import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },
  modules: [
    '@nuxt/image',
    '@nuxtjs/tailwindcss',
    'shadcn-nuxt'
  ],
  css: ['./app/assets/css/main.css'],
  vite: { plugins: [tailwindcss(),], },
  shadcn: {
    prefix: '',
    componentDir: './app/components/ui'
  }
})