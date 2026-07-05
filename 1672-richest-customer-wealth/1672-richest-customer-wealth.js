/**
 * @param {number[][]} accounts
 * @return {number}
 */
const maximumWealth = function(accounts) {
    let maxWealth = 0

    for(let client of accounts){
        let clientWealth = 0
        for(let bank of client){
            clientWealth += bank 
        }
    if(clientWealth > maxWealth) maxWealth = clientWealth
    }

    return maxWealth
}