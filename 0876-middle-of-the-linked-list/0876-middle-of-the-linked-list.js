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

// Optimal solution (slow/fast pointers)

const middleNode = function(head){
    let slow = head
    let fast = head

    while(fast && fast.next){
        fast = fast.next.next
        slow = slow.next
    }

    return slow
}

// Alternative solution (single traversal using an iteration counter)

// const middleNode = function (head) {
//     let middlePointer = head
//     let endPointer = head

//     for (let i = 0; endPointer.next; i++) {
//         endPointer = endPointer.next
//         if (i % 2 === 0) middlePointer = middlePointer.next
//     }

//     return middlePointer
// }

// Baseline solution (count length, then traverse to the middle)

// const middleNode = function(head) {
//     let length = 1;
//     let current = head;

//     while (current.next) {
//         current = current.next;
//         length++;
//     }

//     const middle = Math.floor(length / 2);

//     current = head;

//     for (let i = 0; i < middle; i++) {
//         current = current.next;
//     }

//     return current;
// };