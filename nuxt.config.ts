// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@nuxtjs/tailwindcss",
    "@pinia/nuxt",
    "@nuxtjs/apollo"
  ],
  apollo: {
    clients: {
      default: {
        httpEndpoint: 'https://api.thecatapi.com/v1/images/search?api_key=evQSuoGhGjbNpmJWKj2kKfk2shCIEgSbibqUQ2YhEzjdkmFYZkMKm6vUQdTp2dwy'
      }
    },
  },
})
