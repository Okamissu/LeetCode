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
var middleNode = function(head) {
    let length = 1
    let current = head

    while(current.next !== null){
        current = current.next
        length++
    }

    console.log(length, length/2)

    current = head
    for(let i = 0; i < Math.floor(length/2); i++)
        current = current.next

    return current
};