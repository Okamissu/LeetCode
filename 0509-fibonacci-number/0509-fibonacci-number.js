/**
 * @param {number} n
 * @return {number}
 */
const fib = (n) => {
    if (n < 2) return n

    let prev1 = 1
    let prev2 = 0
    for (let i = 2; i <= n; i++) {

        const current = prev1 + prev2
        prev2 = prev1
        prev1 = current
    }
    return prev1
}


// Recursion with memoization
// const fib = function (n, memo = { 0: 0, 1: 1 }) {
//     if (n in memo) return memo[n];

//     memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
//     return memo[n];
// };