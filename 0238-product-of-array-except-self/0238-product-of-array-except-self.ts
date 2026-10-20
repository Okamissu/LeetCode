function productExceptSelf(nums: number[]): number[] {
    const len = nums.length;
    const prefix: number[] = new Array(len).fill(0);
    const suffix: number[] = new Array(len).fill(0);
    const result: number[] = new Array(len).fill(0);

    prefix[0] = 1
    for (let i = 1; i < len; i++) {
        prefix[i] = prefix[i - 1] * nums[i - 1]
    }

    suffix[len - 1] = 1
    for (let i = len - 2; i >= 0; i--) {
        suffix[i] = suffix[i + 1] * nums[i + 1]
    }

    for (let i = 0; i < len; i++) {
        result[i] = prefix[i] * suffix[i]
    }

    return result
};