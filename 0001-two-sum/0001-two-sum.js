/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */


// brute force
const twoSum = function (nums, target) {
    let n = 0;
    let m = 1;

    while (n < nums.length) {
        while (m < nums.length) {

            if (nums[n] + nums[m] === target) return [n, m]
            m++
        }
        n++
        m=n+1
    }


};