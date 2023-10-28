const { test, expect } = require("@playwright/test");


test.beforeAll(() => {
    console.log("beforeAll");
})


test.beforeEach(() => {
    console.log("beforeEach");
})


test("test 1", () => {
    console.log("test 1");
})


test("test 2", () => {
    console.log("test 2");
})


test.afterEach(() => {
    console.log("afterEach");
})


test.afterAll(() => {
    console.log("afterAll");
})



