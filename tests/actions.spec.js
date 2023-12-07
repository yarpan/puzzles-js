// 1. Enter text into text field
// 2. Get element text
// 3. Click element
// 4. Check checkbox or radio button
// 5. Select option from a drop-down
// 6. Check if element is checked
// 7. Check if element is visible

const {test, expect} = require("@playwright/test");

const uriBase = 'https://the-internet.herokuapp.com';

test('fill the text and click button', async ({page}) => {
    await page.goto(uriBase + '/login');

    const userName = page.locator('#username');
    await userName.fill('tomsmith',{noWaitAfter:false});

    const UserPass = page.locator('#password');
    await UserPass.type('SuperSecretPassword!',{delay:100});

    const loginButton = page.locator('button[type="submit"]');
    await loginButton.click();

    expect(page.url()).toBe(uriBase + '/secure');
})


test('checkbox', async ({page}) => {
    await page.goto(uriBase + '/checkboxes');
    const checkbox = page.locator('#checkboxes>input:nth-child(1)');

    await expect(checkbox).toBeChecked({checked: false});   // assertion element is checked
    
    await checkbox.check();
    await expect(checkbox).toBeChecked();                   // assertion element is checked

    await checkbox.uncheck();
    const isChecked = await checkbox.isChecked();
    expect(isChecked).toBe(false);                          // assertion expect

})


test('radiobutton', async ({page}) => {
    await page.goto('https://www.mortgagecalculator.org');
    const radio = page.locator('//input[@value="percent"]'); // css = input[value='percent']

    const isChecked1 = await radio.isChecked();
    await radio.check();
    const isChecked2 = await radio.isChecked();

    expect(isChecked1).toBe(false);
    expect(isChecked2).toBe(true);
})



test('select from drop-down', async ({page}) => {
    await page.goto(uriBase + '/dropdown');
    const dropdown = page.locator('#dropdown'); 

    await dropdown.selectOption("1");                   //locate by value
    await dropdown.selectOption({label: "Option 2"});   //locate by text
    await dropdown.selectOption({index: 1});            //locate by index 

    await expect(dropdown).toHaveValue('1');            //assertion to have value

})


test('is element visible', async ({page}) => {
    await page.goto('https://www.mortgagecalculator.org');
    const hiddenElement = page.locator('#colorbox>div:nth-child(2)');
    const isVisible1 = await hiddenElement.isVisible();

    const radio = page.locator('//input[@value="percent"]');
    const isVisible2 = await radio.isVisible();

    expect(isVisible1).toBe(false);
    expect(isVisible2).toBe(true);
})

// 1. Clear text field
// 2. Focus on the Element
// 3. hover over the element
// 4. imitate a keyboard keypress
// 5. drag and drop



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