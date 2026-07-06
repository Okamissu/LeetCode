/**
 * @param {number[]} nums
 * @return {boolean}
 */

const containsDuplicate = nums => {
    const seen = new Set()

    for(const num of nums){
        if (seen.has(num))
            return true

        seen.add(num)
    }

    return false
}


// One liner

// const containsDuplicate = nums => new Set(nums).size !== nums.length

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