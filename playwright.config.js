const { PlaywrightTestConfig } = require("@playwright/test");

module.exports = {
  projects: [
    {
      use: {
        spec: './Tests/*.spec.js',
        baseURL: 'https://www.saucedemo.com/',
        browserName: 'chromium',
        headless: true,
        screenshot: 'on',
        video: 'retain-on-failure',
        trace: 'retain-on-failure'
      },
      reporter: [
        ['line'],
        ['allure-playwright', { outputFolder: 'allure-results' }]
      ]
    },
  ],
};
