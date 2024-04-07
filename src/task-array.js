// https://leetcode.com/problems/search-insert-position/
// Given a sorted array of distinct integers and a target value, 
// return the index if the target is found. 
// If not, return the index where it would be if it were inserted in order.
// You must write an algorithm with O(log n) runtime complexity.

// Example 1:
// Input: nums = [1,3,5,6], target = 5
// Output: 2

// Example 2:
// Input: nums = [1,3,5,6], target = 2
// Output: 1

// Example 3:
// Input: nums = [1,3,5,6], target = 7
// Output: 4

// Constraints:
// 1 <= nums.length <= 104
// -104 <= nums[i] <= 104
// nums contains distinct values sorted in ascending order.
// -104 <= target <= 104

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

searchInsert = function(nums, target) {
    if(!nums.includes(target))  //if array NOT contains target
       nums = [...nums, target].sort((a,b) => a-b); //then add target to array and sort array ascending
    return nums.indexOf(target); //return target's position, not matter target initial or inserted
};
