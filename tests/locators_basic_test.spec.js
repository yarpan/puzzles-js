const {test, expect} = require("@playwright/test")

const uriBase = 'https://the-internet.herokuapp.com/'
const uriAbTest = 'https://the-internet.herokuapp.com/abtest'

test('by css', async ({page}) => {
    await page.goto(uriBase)
    const myLocator = page.locator("a[href='/abtest']")
    await myLocator.click();
    //await page.locator("a[href='/abtest']").click()
    //await page.click("a[href='/abtest']")
    expect(page.url()).toBe(uriAbTest)
})

test('by xpath', async ({page}) => {
    await page.goto(uriBase)
    const myLocator = page.locator("//a[@href='/abtest']")
    await myLocator.click();
    expect(page.url()).toBe(uriAbTest)
})

test('by role', async ({page}) => {
    await page.goto(uriBase)
    const myLocator = page.getByRole('link', {name: "A/B Testing"})
    await myLocator.click();
    expect(page.url()).toBe(uriAbTest)
})

test('by text', async ({page}) => {
    await page.goto(uriBase)
    const myLocator = page.getByText('A/B Testing')
    await myLocator.click();
    expect(page.url()).toBe(uriAbTest)
})

test('by alt text', async ({page}) => {
    await page.goto(uriBase)
    const myLocator = page.getByAltText('Fork me on GitHub')
    const src = await myLocator.getAttribute('src')
    expect(src).toBe('/img/forkme_right_green_007200.png')
    await myLocator.click();
    expect(page.url()).toBe('https://github.com/saucelabs/the-internet')
})

test('by label', async ({page}) => {
    await page.goto('https://www.mortgagecalculator.org')
    const myLocator = page.getByLabel('Home Value')
    await myLocator.fill('100')
    const value = await myLocator.inputValue()
    expect(value).toBe('100')
})

test('by placeholder', async ({page}) => {
    await page.goto('https://www.mortgagecalculator.org')
    const myLocator = page.getByPlaceholder('400000')
    await myLocator.fill('100')
    const value = await myLocator.inputValue()
    expect(value).toBe('100')
})

test('by testid', async ({page}) => {
    await page.goto('https://trulia.com')
    const myLocator = page.getByTestId('navbar-rent-button')
    await myLocator.click();
    expect(page.url()).toBe('https://www.trulia.com/for_rent/San_Francisco,CA/')
})

