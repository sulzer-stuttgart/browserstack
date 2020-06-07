# Running tests with codeceptjs

## Update browserstack credentials in browserstack.conf.js file
- user: `browserstack username`,
- key: `browserstack api key`,


## Run tests
- Istall dependencies: `npm install`
- Install selenium server: `node_modules/selenium-standalone/bin/selenium-standalone install`
- Start selenium server: `node_modules/selenium-standalone/bin/selenium-standalone start`
- Run tests with browserstack: `npm run test:browserstack`
- Generate allure folder: `allure generate -o allure-results`
- Run tests with allure: `npm run test:allure`
- Serve allure report: `npm run report`