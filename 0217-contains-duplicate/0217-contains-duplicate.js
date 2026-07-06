/**
 * @param {number[]} nums
 * @return {boolean}
 */
const containsDuplicate = nums => new Set(nums).size !== nums.length



// 1st approach

// const containsDuplicate = function (nums) {
//     const seen = {};

//     for (const num of nums) {
//         if (seen[num]) {
//             return true;
//         }
//         seen[num] = true;
//     }

//     return false;
// };