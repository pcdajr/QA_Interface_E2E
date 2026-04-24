const { defineConfig } = require("cypress");

module.exports = defineConfig({
  allowCypressEnv: false,

  e2e: {
    baseUrl: 'https://www.saucedemo.com/', // adicionando aqui para não repetir em todos os scripts dos casos testes.
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
