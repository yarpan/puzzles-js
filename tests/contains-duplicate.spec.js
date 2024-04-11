import { test, expect } from '@playwright/test';

const testData = [
    [[1, 2, 3, 1], true],
    [[1, 2, 3, 4], false],
    [[1, 1, 1, 3, 3, 4, 3, 2, 4, 2], true]
];

test.describe("Contains Duplicate test", () => {
    const testDataLen = testData.length;
    for (let i = 0; i < testDataLen; i++) {
        test(`Check for ${testData[i][0]}`, async () => {
            expect(containsDuplicate(testData[i][0])).toBe(testData[i][1]);
            console.log(testData[i][0] + ' Contains Duplicate? ' + testData[i][1]);
        });
    }
});

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
    let uniqArray = [];
    for (let i = 0; i < nums.length; i++) {
        if (uniqArray.includes(nums[i])) {
            return true;
        } else {
            uniqArray.push(nums[i]);
        }
    }
    return false;
};

// Source:
// Contains Duplicate
// https://leetcode.com/explore/featured/card/top-interview-questions-easy/92/array/578/