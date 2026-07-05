/**
 * @param {number[]} nums
 * @return {number[]}
 */
const runningSum = function(nums) {

    const sumArray = [nums[0]]

    for(let i = 1; i < nums.length; i++) {
        const num = nums[i]
        const numBefore = sumArray[i - 1]

        const result = num + numBefore
        sumArray.push(result)
    }

    return sumArray
};