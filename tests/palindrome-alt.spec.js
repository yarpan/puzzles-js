// Source:
// Valid Palindrome
// https://leetcode.com/explore/featured/card/top-interview-questions-easy/127/strings/883/

import { test, expect } from '@playwright/test';

const testData = [
    ['aa', true],
    ['abba', true],
    ['A man a plan a canal Panama', true],
    ['race a car', false],
    [' ', true]
];

test.describe("Palindrome test", () => {
    for (let i = 0; i < testData.length; i++) {
        test(`Check for ${testData[i][0]}`, async () => {
            expect(palindrome(testData[i][0])).toBe(testData[i][1]);
            console.log('"' + testData[i][0] + '" - is Palindrome? ' + testData[i][1]);
        });
    }
});

function palindrome(str) {
    var re = /[\W_]/g;
    var lowRegStr = str.toLowerCase().replace(re, '');
    var reverseStr = lowRegStr.split('').reverse().join(''); 
    return reverseStr === lowRegStr;
  }
