// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxt/content", "@nuxt/ui", "@nuxtseo/module", "nuxt-og-image"],
  site: {
    url: "https://nuxt-permadi.netlify.app/",
    name: "Test Website",
    description: "Welcome to my awesome site!",
    defaultLocale: "id",
  },
});
