// 844. Backspace String Compare
// https://leetcode.com/problems/backspace-string-compare/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
function backSpaceOp(arr){
  let i = 0;
    while(i < arr.length){
        if(arr[i] === "#"){
            if(i === 0){
                arr.splice(i, 1);
            }else {
                arr.splice(i-1, 2);
                i--;
            }
        } else{
          i++
        }
    }
  return arr;
}

var backspaceCompare = function(s, t) {
    s= backSpaceOp([...s]).join('');
    t = backSpaceOp([...t]).join('');
    if(s.length != t.length) return false;
    if(s === t) return true;
    return false;
};

