/**
 * @param {number[][]} accounts
 * @return {number}
 */
const maximumWealth = function (accounts) {
    return accounts.reduce((max, client) => Math.max(max, client.reduce((bank, acc) => acc + bank, 0)), 0)
}