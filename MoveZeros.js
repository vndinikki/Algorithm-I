// 283. Move Zeroes
// https://leetcode.com/problems/move-zeroes/

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    if(nums.length <= 1){
        return nums;
    }
    let count = 0;
    let zeroCount = 0;
    while(count < nums.length){
        if(nums[count] !== 0){
            [nums[zeroCount], nums[count]] = [nums[count], nums[zeroCount]];
            zeroCount++;
        }
        count++;
    }
};
