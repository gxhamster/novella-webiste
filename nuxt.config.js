export default {
  target: "static",
  head: {
    title: "novella-website",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [],
  },
  tailwindcss: {
    cssPath: "~/assets/css/tailwind.css",
    configPath: "tailwind.config.js",
    exposeConfig: false,
    config: {},
    injectPosition: 0,
    viewer: true,
  },
  css: [],
  plugins: [],
  components: true,
  buildModules: ["@nuxtjs/tailwindcss", "@nuxtjs/fontawesome"],
  fontawesome: {
    icons: {
      solid: ["faCog"],
      brands: ["faFacebook", "faTwitter", "faViber"],
    },
  },
  modules: [],
  build: {
    transpile: ["gsap"],
    postcss: {
      plugins: {
        "postcss-custom-properties": false,
      },
    },
  },
};
