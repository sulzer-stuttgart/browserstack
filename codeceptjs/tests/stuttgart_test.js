const allure = codeceptjs.container.plugins('allure');
Feature('Search sulzer gmbh on google');

Scenario('should search for "sulzer gmbh stuttgat" and click on link with a name "Stuttgart"', (I) => {
    allure.severity('blocker');

    I.amOnPage('https://google.com');
    I.waitForVisible({name: 'q'}, 5);
    I.fillField({name: 'q'}, 'sulzer gmbh stuttgart');
    I.pressKey('Enter');
    I.waitForVisible(locate('a').withText('Stuttgart'), 5);
    I.click(locate('a').withText('Standorte'));
    I.seeInCurrentUrl('https://www.sulzer.de/de/standorte/');
});
