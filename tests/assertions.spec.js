// Assertions
// expect assertion
// element to have text
// element have attribute value
// element is visible
// element is checked
// element has value
// page have title
// page have URL

// element has css value
// element has class
// count of elements found

//negating assertions
// soft assertions


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


test('advanced asserts', async ({page}) => {
    await page.goto(uriBase);

    const heading = page.locator('h1.heading');
    await expect(heading).toHaveCSS('font-style', 'normal');    //assert element has css value
    
    const h1 = page.locator('h1');
    await expect(h1).toHaveClass('heading');                    //assert element has class

    const div = page.locator('div');
    await expect(div).toHaveCount(7);                           //assert count of elements

})


test('reverse assertions', async ({page}) => {
    await page.goto(uriBase);

    const heading = page.locator('h1.heading');
    await expect(heading).not. toHaveText('Hello World!');      //assert element has css value

    const div = page.locator('div');
    await expect(div).not.toHaveCount(6);                       //reverse assertion

})


test('soft assertions', async ({page}) => {
    await page.goto(uriBase);

    const heading = page.locator('h1.heading');
    await expect.soft(heading, "message for test fail").toHaveText('Hello World!'); //soft assertion

    const div = page.locator('div');
    await expect.soft(div).toHaveCount(6);                                          //soft assertion

})