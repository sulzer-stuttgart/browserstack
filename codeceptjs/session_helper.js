const { Helper } = codeceptjs;
const { container, output } = require('codeceptjs');
const axios = require('axios');
const chalk = require('chalk');
const Table = require('cli-table');

class SessionHelper extends Helper {

  async _before(test) {
    this.helpers["WebDriver"].config.capabilities.name = test.title;

    // To disable this set manualStart: false in webDriver.js
    await this.helpers["WebDriver"]._startBrowser();
  }

  async _failed() {
    const webDriverHelper = container.helpers('WebDriver');
    const browser = await webDriverHelper.browser;

    if (browser && browser.sessionId) {
      const { data, status } = await axios.get(`https://www.browserstack.com/automate/sessions/${browser.sessionId}.json`, {
        auth: {
          username: 'mustafamasetic2',
          password: 'hmos6DKMpyPwzG1MqFQi',
        },
      }).catch(error => output.error(`Sth. went wrong while fetching the session data 🤷‍ ${error}`));

      if (status === 200) {
        const table = new Table({
          head: ['TYPE', 'URL'],
        });

        const { automation_session } = data;

        output.print(`\n\nFailed Test: ${automation_session.name}`);
        output.print(chalk.blue('\n\n=========== 🔥 BrowserStack Session Urls 🔥 ==========='));
        output.print(`🔒 Private Url: ${automation_session.browser_url}`);
        output.print(`👀 Public Url: ${automation_session.public_url}`);
      } else {
        output.error(`Sth. went wrong while fetching the session data 🤷‍. Status code ${status}`);
      }
    } else {
      output.error('No browser session found 🤷‍💀');
    }
  }
}

module.exports = SessionHelper;
