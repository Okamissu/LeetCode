function isPalindrome(s: string): boolean {
    let prep = s.toLowerCase();
    prep = prep.replace(/[^a-z0-9]/g, '');;

    if (prep) {
        let left = 0;
        let right = prep.length - 1;

        while (left <= right) {
            if (prep[left] !== prep[right]) return false;

            left++;
            right--;
        }
    }

    return true;
}
