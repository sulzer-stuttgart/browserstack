Feature('Search sulzer gmbh on google');

Scenario('should search for "sulzer gmbh" and click on link with a name "Karriere"', (I) => {
    I.amOnPage('https://google.com');
    I.waitForVisible({name: 'q'}, 5);
    I.fillField({name: 'q'}, 'sulzer gmbh');
    I.pressKey('Enter');
    I.waitForVisible(locate('a').withText('Karriere'), 5);
    I.click(locate('a').withText('Standorte'));
    I.seeInCurrentUrl('https://www.sulzer.de/de/standorte/');
});
