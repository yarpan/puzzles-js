// 1. Clear text field
// 2. Focus on the Element
// 3. hover over the element
// 4. imitate a keyboard keypress
// 5. drag and drop

const {test, expect} = require("@playwright/test");

const uriBase = 'https://the-internet.herokuapp.com';

test('clear text field', async ({page}) => {
    await page.goto(uriBase + '/login');

    const userName = page.locator('#username');
    await userName.fill('tomsmith');

    await userName.press('Tab');            //keypress
    await userName.clear();                 //clear text field

    console.log();
})


test('hover', async ({page}) => {
    await page.goto('https://www.trulia.com/');

    await page.locator('li[data-testid="navbar-rent-button"]').hover();

    console.log();
})


test('drag', async ({page}) => {
    await page.goto('https://the-internet.herokuapp.com/drag_and_drop');
    await page.dragAndDrop('#column-a', '#column-b')

    console.log();
})


test('drag locator', async ({page}) => {
    await page.goto('https://the-internet.herokuapp.com/drag_and_drop');
    const pointSource = page.locator('#column-a');
    const pointTarget = page.locator('#column-b');
    
    await pointSource.dragTo(pointTarget)

    console.log();
})