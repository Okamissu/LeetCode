function mergeAlternately(word1: string, word2: string): string {
    const minLen = Math.min(word1.length, word2.length);
    const result: string[] = [];
    

    for (let i = 0; i < minLen; i++) {
        result.push(word1[i], word2[i]);
    }
    
    
    return result.join('') + word1.slice(minLen) + word2.slice(minLen);
}
