/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
const canConstruct = function (ransomNote, magazine) {
    const letterDict = {};

    for (const letter of magazine) {
        letterDict[letter] = (letterDict[letter] ?? 0) + 1;
    }

    for (const letter of ransomNote) {
        if (!letterDict[letter]) return false;
        letterDict[letter]--;
    }

    return true;
};