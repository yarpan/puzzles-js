const {test, expect} = require("@playwright/test")

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


const uriBase = 'https://the-internet.herokuapp.com/'
const uriAbTest = 'https://the-internet.herokuapp.com/abtest'
const locatorAbTest = '#content>ul>li:nth-child(1)>a'

test("test_3", async({page}) =>{
    await page.goto(uriBase)
    await page.click(locatorAbTest)
    //const url = await page.url();
    expect(page.url()).toBe(uriAbTest)
})