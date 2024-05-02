// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss"],
  runtimeConfig: {
    apiSecret: {
      apiSecret: process.env.API_SECRET,
      apiAssistant: process.env.API_ASSISTANT,
    },
  },
});
