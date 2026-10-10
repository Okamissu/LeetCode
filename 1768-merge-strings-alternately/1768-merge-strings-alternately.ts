function mergeAlternately(word1: string, word2: string): string {
    const maxLen = Math.max(word1.length, word2.length);
    let result = ''; 
    
    for (let i = 0; i < maxLen; i++) {
        i < word1.length && (result += word1[i]); 
        i < word2.length && (result += word2[i]); 
    }
    return result;
}
