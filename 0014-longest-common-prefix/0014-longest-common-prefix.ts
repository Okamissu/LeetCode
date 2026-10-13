function longestCommonPrefix(strs: string[]): string {
    if (!strs || strs.length === 0) return "";
    
    let prefix = "";
    let firstStr = strs[0];

    for (let i = 0; i < firstStr.length; i++) {
        const char = firstStr[i];
        if (strs.every(str => str[i] === char)) {
            prefix += char;
        } else {
            break;
        }
    }

    return prefix;
}