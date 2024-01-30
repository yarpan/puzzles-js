const {test, expect} = require("@playwright/test");

const uriBase = 'https://the-internet.herokuapp.com/';
const uriAbTest = 'https://the-internet.herokuapp.com/abtest';

test('wait to element state', async ({page}) => {
    await page.goto(uriBase);
    const checkbox = page.locator('#checkboxes>input:nth-child(1)');
    checkbox.waitFor({state:"visible", timeout:1000});
        //{ state?: "attached" "detached" "visible" "hidden" 
        //timeout?: number
    
})


test('wait for network idle', async ({page}) => {
    await page.goto(uriBase);

    await page.waitForLoadState()
    // (method) Page.waitForLoadState(state?: "load" | "domcontentloaded" | "networkidle" |
    //  options?: {   timeout?: number | undefined;

    // 5000
    await orederSent.waitFor({timeout: 15000});

    // timeout *3
    test.setTimeout(90000);
    test.slow();
})


