
const romVal: Record<string, number> = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
};

function romanToInt(s: string): number {
    let sum = 0;

    for (let i = 0; i < s.length; i++) {
        const current = romVal[s[i]];
        const next = romVal[s[i + 1]];

        if (next !== undefined && current < next) {
            sum -= current;
        } else {
            sum += current;
        }
    }

    return sum;
}
