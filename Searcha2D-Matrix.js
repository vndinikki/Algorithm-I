// 74. Search a 2D Matrix
// https://leetcode.com/problems/search-a-2d-matrix/

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    
    //find row
    let l = 0;
    let h = matrix.length-1;
    let col = matrix[0].length;
    let index = -1;
    while(l <= h ){
        let mid = l + Math.floor((h-l)/2);
        if( matrix[mid][0] <= target && matrix[mid][col-1] >= target ){
            index = mid;
            break;
        } else if (matrix[mid][0] <= target){
            l = mid +1;
        } else{
            h = mid -1;
        } 
    }
    if(index === -1){
        return false;
    }
    l = 0;
    h = col;
    while(l <= h){
        let mid = l + Math.floor((h-l/2));
        if( matrix[index][mid] == target){
            return true;
        } else if (matrix[index][mid] <= target){
            l = mid +1;
        } else {
            h = mid -1;
        }
    }
    return false;
};
