const romVal = {
    "I": 1,
    "V": 5,
    "X": 10,
    "L": 50,
    "C": 100,
    "D": 500,
    "M": 1000
}

function romanToInt(s: string): number {
    let sum = 0
    for(let i = 0; i < s.length; i++){
        const n1 = romVal[s[i]]
        const n2 = romVal[s[i+1]]
        if (n1 >= n2 || !n2) sum += n1
        else sum -= n1
    }

    return sum
};