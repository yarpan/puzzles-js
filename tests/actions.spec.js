const {test, expect} = require("@playwright/test");

const uriBase = 'https://the-internet.herokuapp.com/';
const uriAbTest = 'https://the-internet.herokuapp.com/abtest';

test('enter text', async ({page}) => {
    await page.goto(uriBase + 'login');

    const userName = page.locator('#username');
    await userName.fill('tomsmith',{noWaitAfter:false});

    const UserPass = page.locator('input#password');
    await userName.type('SuperSecretPassword!',{delay:500});


    const loginButton = page.locator('button[type="submit"]');
    await loginButton.click();

    expect(page.url()).toBe(uriAbTest);
})