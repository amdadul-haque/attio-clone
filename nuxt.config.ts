// https://nuxt.com/docs/api/configuration/nuxt-config
// import { resolve } from 'path';
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: [
    '~/assets/css/main.css',
    '@fortawesome/fontawesome-free/css/all.css',
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  // alias: {
  //   '@': resolve(__dirname, '/'),
  // },
})
