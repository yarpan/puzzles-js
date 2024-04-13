// Source:
// Reverse String
// https://leetcode.com/explore/featured/card/top-interview-questions-easy/127/strings/879/

import { test, expect } from '@playwright/test';

const testData = [
    [["h","e","l","l","o"], ["o","l","l","e","h"]],
    [["H","a","n","n","a","h"], ["h","a","n","n","a","H"]]
];

test.describe("Reverse String test", () => {
    for (let i = 0; i < testData.length; i++) {
        test(`Check for ${testData[i][0]}`, async () => {
            console.log('Reverse ' + testData[i][0]+ ' > expect: '+ testData[i][1]);
            expect(reverseString(testData[i][0])).toEqual(expect.arrayContaining(testData[i][1]));
        });
    }
});

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    let output = [];
    for(let i=0; i<s.length; i++){
       output.push(s[s.length-i-1]);
    }
    return output;
};
