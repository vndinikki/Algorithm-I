// 704. Binary Search
// https://leetcode.com/problems/binary-search/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */


var findElement = function (nums, target, left, right) {
    if(left <= right) {
        let mid = Math.floor((left+right)/2);
        if(nums[mid]===target) return mid ;
        else if (nums[mid] < target ) return findElement(nums, target, mid+1, right);
        else return findElement(nums, target, left, mid-1);
     }
    return -1;
}
var search = function(nums, target) {
    return findElement(nums, target, 0, nums.length-1) ;
};
