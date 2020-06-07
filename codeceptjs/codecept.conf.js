exports.config = {
  tests: './tests/*_test.js',
  output: './output',
  helpers: {
    WebDriver: {
      url: 'www.google.com',
      browser: 'chrome',
    }
  },
  include: {
    I: './tests/steps_file.js'
  },
  bootstrap: null,
  mocha: {},
  name: 'codeceptjs',
  plugins: {
    retryFailedStep: {
      enabled: true
    },
    "allure": {
      "enabled": true,
      "outputDir": './allure-results',
      "enableScreenshotDiffPlugin": true
    },
    screenshotOnFail: {
      enabled: true
    }
  }
}