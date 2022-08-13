import { defineNuxtConfig } from 'nuxt'
const { BASE_URL, API_KEY } = process.env;
// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    srcDir: 'client/',
    privateRuntimeConfig: {
        baseURL: BASE_URL,
        apiKey: API_KEY,
      },
    publicRuntimeConfig: {
        apiKey: process.env.NODE_ENV !== 'production' ? API_KEY : undefined,
        baseURL: process.env.NODE_ENV !== 'production' ? BASE_URL : undefined,
    },
    link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    css: ['@/assets/scss/reset.scss', '@/assets/scss/style.scss'],
})