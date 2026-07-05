/**
 * @param {number} n
 * @return {string[]}
 */
const fizzBuzz = function(n) {
    const numArray = Array.from({ length: n}, (_, i) => i+1  )

    const answer = numArray.map(num => {
    if (num % 15 === 0) return "FizzBuzz"
    if (num % 5 === 0) return "Buzz"
    if (num % 3 === 0) return "Fizz"
    return "" + num
    })

    return answer
};