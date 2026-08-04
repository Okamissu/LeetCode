/**
 * @param {number} n
 * @return {number}
 */
const climbStairs = (n) => {
    const waysArray = [1,1]

    for(let i = 2; i <= n; i++){
        waysArray.push((waysArray[i-1] + waysArray[i-2]))
    }

    return waysArray[n]
};