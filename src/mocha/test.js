import { assert, expect } from 'chai';

describe("TestSuite 1", () => {
    it("TestCase 1", () => {
        console.log("Test 1");
        assert.typeOf('foo', 'string');
        assert.lengthOf('foo', 3)
    }),
    it("TestCase 2", () => {
        console.log("Test 2");
        let tea = [1, 2, 3];
        assert.lengthOf(tea, 3);
    }),
    it("TestCase 3", () => {
        console.log("Test 3");
        const number = 2+2;
        assert.equal(number, '4');
    })
    it("TestCase 4", () => {
        console.log("Test 4");
        const number = 2+2;
        assert.deepEqual(number, '4');
    })
})