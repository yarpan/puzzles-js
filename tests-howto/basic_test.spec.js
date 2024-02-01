const {test, expect} = require("@playwright/test");
//const { chmod } = require("fs");

const uriBase = 'https://the-internet.herokuapp.com/'
const uriAbTest = 'https://the-internet.herokuapp.com/abtest'
const locatorAbTest = '#content>ul>li:nth-child(1)>a'

test("test_1", async({page}) =>{
    await page.goto('https://the-internet.herokuapp.com/')
    await page.click('#content>ul>li:nth-child(1)>a')
    const url = await page.url();
    expect(url).toBe('https://the-internet.herokuapp.com/abtest')
})


test("test_2", async({page}) =>{
    await page.goto('https://the-internet.herokuapp.com/')
    await page.click('#content>ul>li:nth-child(1)>a')
    //const url = await page.url();
    expect(page.url()).toBe('https://the-internet.herokuapp.com/abtest')
})

test("test_3", async({page}) =>{
    await page.goto(uriBase)
    await page.click(locatorAbTest)
    //const url = await page.url();
    expect(page.url()).toBe(uriAbTest)
})


// run tests from cmd
// npx playwright test
// npx playwright show-report


//for executing this test only
//test('fill the text and click button', async ({page}) => {
test.only('fill the text and click button', async ({page}) => {
    await page.goto(uriBase + '/login');

    const userName = page.locator('#username');
    await userName.fill('tomsmith',{noWaitAfter:false});

    const UserPass = page.locator('#password');
    await UserPass.type('SuperSecretPassword!',{delay:100});

    const loginButton = page.locator('button[type="submit"]');
    await loginButton.click();
    //await loginButton.click({force:true});                    //no wait until element actionability

    expect(await page.url()).toBe(uriBase + 'secure');
})