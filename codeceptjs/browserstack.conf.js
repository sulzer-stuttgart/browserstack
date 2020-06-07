exports.config = {
  tests: './tests/*_test.js',
  output: './output',
  helpers: {
    SessionHelper: {
      require: './session_helper.js',
    },
    WebDriver: {
      user: '',// browserstack username
      key: '', // browserstack api key
      capabilities: {
        'project': 'Browserstack integration with Codeceptjs',
        'build': `Regression - ${new Date().toLocaleString()}`,
        'name' : `${new Date().toLocaleString()} - Mac OS Mojave Firefox`,
        'browserName' : 'Firefox',
        'browser_version' : '78.0 beta',
        'os' : 'OS X',
        'os_version' : 'Mojave',
        'resolution' : '1024x768',
        'browserstack.networkLogs': 'true',
        'browserstack.console': 'errors'
      },
      url: 'www.google.com',
      browser: 'firefox',
      restart: false,
      manualStart: true,
      keepBrowserState: false
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