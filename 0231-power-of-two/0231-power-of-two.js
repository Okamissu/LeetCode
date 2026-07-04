/**
 * @param {number} n
 * @return {boolean}
 */
const isPowerOfTwo = function(n) {
    if(n < 1) return false

    return (n & (n - 1)) === 0 
};

// Time Complexity: O(1)
// Space Complexity: O(1)