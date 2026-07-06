/**
 * @param {number[]} nums
 * @return {boolean}
 */
const containsDuplicate = function(nums) {
    const numCount = {}

    for(const num of nums){
        numCount[num] = (numCount[num] || 0) + 1
    }

    return Object.values(numCount).some( n => n > 1)
};