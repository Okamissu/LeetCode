/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */


// brute force using for + cache length

const twoSum = function (nums, target){
    const len = nums.length

    for(let i = 0; i < len; i++){
        for(let j = i+1; j < len; j++){
            if(nums[i] + nums[j] === target) return [i,j]
        }
    }
}

// brute force
// const twoSum = function (nums, target) {
//     let n = 0;
//     let m = 1;

//     while (n < nums.length) {
//         while (m < nums.length) {

//             if (nums[n] + nums[m] === target) return [n, m]
//             m++
//         }
//         n++
//         m=n+1
//     }


// };