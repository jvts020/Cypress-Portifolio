import { defineConfig } from 'cypress';

export default defineConfig({
  projectId: 'fghuv4',
  e2e: {
    baseUrl: 'http://localhost:4200',
    //baseUrl: 'https://new-treino.pages.dev/',
    setupNodeEvents(on, config) {
      // Aqui você não precisa configurar variáveis de ambiente, Cypress já lê do cypress.env.json
      return config;
    },

    specPattern: 'cypress/e2e/**/*.ts',
    supportFile: 'cypress/support/index.ts',
  },
});
