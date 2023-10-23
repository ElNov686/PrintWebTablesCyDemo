const { defineConfig } = require("cypress");

module.exports = defineConfig ({
    viewportWidth: 1920,
    viewportHeight: 1080,
    chromeWebSecurity: false,
    e2e: {
        setupNodeEvents(on, config) {
          // implement node event listeners here
            },
        },
//    env: {
//    apiBaseUrl: 'https://restful-booker.herokuapp.com' https://restful-booker.herokuapp.com/apidoc/#api-Booking
//    },
//    video: false,
//    reporter: 'junit',
//    reporterOptions: {
//    mochaFile: 'reports/test-results-[hash].xml',
//    },
});
