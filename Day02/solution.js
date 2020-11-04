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
var insertionSortList = function(head) {
    let storeValues = [];
    if(head === null) {
        return head;
    } else {
        storeValues.push(head.val);
    }
    
    while(head.next !== null) {
        head = head.next;
        let index;
        for(let i = storeValues.length - 1; i >= 0; i--) {
            if(head.val < storeValues[i]) {
                index = i;
            }
        }
        if(index === undefined) {
            storeValues.push(head.val);
        } else {
            storeValues.splice(index, 0, head.val);
        }
    }
    
    //converting array to linked list
    head = storeValues.reverse().reduce((acc, element) => {
        if(acc === null) {
            acc = new ListNode(element);
        } else {
            acc = new ListNode(element, acc);
        }
        return acc;
    }, null);
    
    return head;
};