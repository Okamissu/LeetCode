function countPrimes(n: number): number {
    if (n <= 2) return 0;

    const arr = Array(n).fill(true);
    arr[0] = false;
    arr[1] = false;

    // Mark non-primes
    for (let i = 2; i * i < n; i++) { 
        if (arr[i]) {
            // Start marking multiples from i * i
            for (let j = i * i; j < n; j += i) { 
                arr[j] = false;
            }
        }
    }

    // Count the remaining true values
    let count = 0;
    for (let i = 2; i < n; i++) { 
        if (arr[i]) count++;
    }

    return count;
}
