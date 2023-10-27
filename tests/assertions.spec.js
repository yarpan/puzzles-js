// Assertions
// expect assertion
// element to have text
// element have attribute value
// element is visible
// element is checked
// element has value
// page have title
// page have URL


const {test, expect} = require("@playwright/test");

const uriBase = 'https://the-internet.herokuapp.com';

test('expect', async ({page}) => {
    await page.goto(uriBase);
    const myLocator = page.locator("a[href='/abtest']");
    const text = await myLocator.textContent();

    expect(text).toBe('A/B Testing');                           // expect assertion
    expect(text.length).toEqual(11);                            // expect assertion

    await expect(myLocator).toHaveText('A/B Testing');          // element to have text

    await expect(myLocator).toHaveAttribute("href", "/abtest"); // element have attribute value
    await expect(myLocator).toBeVisible();                      // element is visible

})


test('page', async ({page}) => {
    await page.goto(uriBase);

    await expect(page).toHaveTitle('The Internet');             // page have title

    //const myLocator = page.locator("//a[@href='/abtest']");
    //await myLocator.click();
    await page.click("a[href='/abtest']");

    await expect(page).toHaveURL(uriBase + '/abtest');          // page have URL

})