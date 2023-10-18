const {test, expect} = require("@playwright/test")

const uriBase = 'https://the-internet.herokuapp.com/'
const uriAbTest = 'https://the-internet.herokuapp.com/abtest'

test('filter by text', async ({page}) => {
    await page.goto(uriBase);
    const myLocator = page.locator('a',{hasText:"A/B Testing"});
    await myLocator.click();
    expect(page.url()).toBe(uriAbTest);
})


test('filter by another element', async ({page}) => {
    await page.goto(uriBase);
    const myLocator = page.locator('#content', {has:page.locator('H2')});
    console.log();
})


test('multiple locators', async ({page}) => {
    await page.goto(uriBase);
    const myLocator = page.locator('#content a');
    const myLocatorArr =[];

    const counts = await myLocator.count();

    for(let i=0; i<counts; i++){
        const element = myLocator.nth(i);
        myLocatorArr.push(element);
    }

    await myLocatorArr[0].click();
    expect(page.url()).toBe(uriAbTest);
})


test('multiple match css', async ({page}) => {
    await page.goto(uriBase);
    const myLocator = page.locator("some_locator_1,some_locator_2,a[href='/abtest']");
    await myLocator.click();
    expect(page.url()).toBe(uriAbTest);
})







