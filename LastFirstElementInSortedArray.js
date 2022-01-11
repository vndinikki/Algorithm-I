// 34. Find First and Last Position of Element in Sorted Array
// https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/

var searchRange = function(nums, target) {
    let index = [-1, -1]
    while (nums.length) {
        if (nums.pop() === target) {
            if (index[1] < 0) {
                index[1] = nums.length;
            }
            index[0] = nums.length;
        }
    }
    return index;
};
