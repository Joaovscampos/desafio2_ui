import { defineConfig } from "cypress";
import { allureCypress } from "allure-cypress/reporter";

export default defineConfig({
  e2e: {
    experimentalRunAllSpecs: true,
    chromeWebSecurity: false,
    experimentalWebKitSupport: true,
    baseUrl: 'https://demoqa.com/',
    viewportWidth: 1920,
    viewportHeight: 1080,
    screenshotOnRunFailure: false,
    watchForFileChanges: false,
    defaultCommandTimeout: 20000,

    setupNodeEvents(on, config) {
      // implement node event listeners here
      allureCypress(on,config, {
        resultsDir: 'allure-results',
      })
      return config;
    },
  },
});
