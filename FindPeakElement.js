// 162. Find Peak Element
// https://leetcode.com/problems/find-peak-element/solution/

/**
 * @param {number[]} nums
 * @return {number}
 */
var calc = function(nums, l, r) {
    
    let mid = l + Math.floor((r-l)/2);
    let index = -1;
    if(l <= r){
      if(mid === nums.length-1){
          if(nums[mid] > nums[mid-1]){
              return mid;
          }
      } else if( nums[mid] > nums[mid+1] && nums[mid] > nums[mid-1]){
        return mid;
      } else {
        index = calc( nums, l, mid-1);
        if(index == -1){
         index = calc( nums, mid+1, r);
        }
      }
    }
    return index;
}
var findPeakElement = function(nums) {
    let index = 0;
    if(nums.length > 2){
       index = calc(nums, 0, nums.length-1);
    }
    if(nums.length === 2){
        if(nums[1] > nums[0]){
            return 1;
        }
    }
    return Math.max(index, 0);
};
