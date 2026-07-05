/**
 * @param {number} num
 * @return {number}
 */
const numberOfSteps = function (num) {
    let steps = 0

    while (num !== 0) {

        num = (num & 1) === 0 ? num >> 1 : num - 1
        steps++
    }

    return steps
};

