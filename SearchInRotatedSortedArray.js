// 33. Search in Rotated Sorted Array
// https://leetcode.com/problems/search-in-rotated-sorted-array/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var binarySearch = function( array, target){
  let l = 0;
  let r = array.length - 1;
    while(l <= r){
        let mid = l + Math.floor((r-l)/2);
        if(array[mid] === target){
            return mid;
        } else if( array[mid] > target){
            r = mid-1;
        } else {
            l = mid + 1;
        }
    }
  return -1;
}

var search = function(nums, target) {
    let pivot = 0;
    for(let i = 0; i < nums.length-1; i++){
        if(nums[i] > nums[i+1]){
            pivot = i+1;
        }
    }
    let index = -1;
    index = binarySearch(nums.slice(0, pivot), target);
    if(index === -1 )
    {
      index = binarySearch(nums.slice(pivot), target);
      if( index != -1)
       index = pivot + index;
    }

    return index;
};
