/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var getDecimalValue = function(head) {
    let firstBit = String(head.val);
    while(head.next !== null) {
        head = head.next;
        firstBit += head.val;
    }
    return parseInt(firstBit, 2).toString(10);
};