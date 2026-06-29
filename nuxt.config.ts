// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  runtimeConfig: {
    public: {
      agencyName: 'Exemple',
      agencyLogo: '',
      agencyEmail: 'contact@exemple.fr',
      agencyPhone: '+33 (0)1 89 71 24 60'
    }
  },
  app: {
    head: {
      viewport: 'width=device-width, initial-scale=1',
      meta: [
        {
          name: 'description',
          content:
            "Exemple, agence web en France specialisee dans la creation de site web et le referencement naturel pour les entreprises."
        }
      ]
    }
  }
})
