// 82. Remove Duplicates from Sorted List II
// https://leetcode.com/problems/remove-duplicates-from-sorted-list-ii/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    let prev = head;
    let temp = null;
    if(prev === null || prev.next === null){
        return head;
    }
    let curr = prev.next;
    if(curr.next === null){
        if(prev.val === curr.val) return temp;
        return head;
    }
    while(curr != null){
        if(prev.val == curr.val)
        { 
            while(curr.next != null && curr.next.val === prev.val ){
                curr = curr.next;
            }
            prev = curr.next;
            if(temp != null)
                temp.next = prev;
            else {
                head = curr.next;
            }
            if(prev == null || prev.next == null){
                return head;
            }
            curr = prev.next;
        } else {
            temp = prev;
            prev = curr;
            curr = curr.next;
        }
    }
    return head;
};
