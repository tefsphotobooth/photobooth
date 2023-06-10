// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  ssr: false,
  css: [
    "vuetify/lib/styles/main.sass",
    "@mdi/font/css/materialdesignicons.css",
    "material-design-icons-iconfont/dist/material-design-icons.css",
  ],
  build: {
    transpile: ["vuetify"],
  },
  // app: {
  //   baseURL: "/", // baseURL: '/<repository>/'
  // },
  vite: {
    ssr: {
      noExternal: ["vuetify"],
    },
    define: {
      "process.env.DEBUG": false,
    },
  },
  imports: {
    dirs: [
      // Scan top-level modules
      "composables",
    ],
  },
  modules: [
    [
      "nuxt-mail",
      {
        message: {
          to: "ljota01@gmail.com",
        },
        smtp: {
          host: "smtp-relay.sendinblue.com",
          port: 587,
          auth: {
            user: "gomo87376@gmail.com",
            pass: "MsAZ1kEP9mp42jSN",
          },
        },
        defaultFrom: "gomo87376@gmail.com",
      },
    ],
  ],
});
