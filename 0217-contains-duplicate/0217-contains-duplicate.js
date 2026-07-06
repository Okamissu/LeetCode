/**
 * @param {number[]} nums
 * @return {boolean}
 */
const containsDuplicate = function(nums) {
    const seen = {};

    for (const num of nums) {
        if (seen[num]) {
            return true;
        }
        seen[num] = true;
    }

    return false;
};