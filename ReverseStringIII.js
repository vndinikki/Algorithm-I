// 557. Reverse Words in a String III
// https://leetcode.com/problems/reverse-words-in-a-string-iii/

/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    return s.split(' ').map(elem => elem.split('').reverse().join('')).join(' ');
    //return s.split(" ").reverse().join(" ").split("").reverse().join("")
};
