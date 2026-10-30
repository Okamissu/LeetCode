function reverseWords(s: string): string {
    return s.split(" ").reverse().filter(str => str.length).join(" ")
};