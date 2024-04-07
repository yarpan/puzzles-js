//const { beforeEach, before, afterEach, after } = require("mocha");

describe ("TestSuite 1", () => {
    before(() => {
        console.log("beforeAll\n");
    }),
    beforeEach(() => {
        console.log("beforeEach");
    }),
    //=====================================
    it("TestCase 1", () => {
        console.log("Test 1");
    }),
    it("TestCase 2", () => {
        console.log("Test 2");
    }),
    it("TestCase 3", () => {
        console.log("Test 3");
    }),
    //=====================================
    afterEach(() => {
        console.log("afterEach\n");
    }),
    after(() => {
        console.log("afterAll");
    })
})


