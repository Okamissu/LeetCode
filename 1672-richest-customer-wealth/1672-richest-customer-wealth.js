/**
 * @param {number[][]} accounts
 * @return {number}
 */
const maximumWealth = function (accounts) {
    return accounts.reduce(
        (max, client) =>
            Math.max(max, client.reduce((sum, bank) => sum + bank, 0)),
        0
    );
};