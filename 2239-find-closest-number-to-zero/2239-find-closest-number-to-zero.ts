function findClosestNumber(nums: number[]): number {
    let candidate = nums[0];

    for (let i = 1; i < nums.length; i++) {
        if (
            Math.abs(nums[i]) < Math.abs(candidate) ||
            (Math.abs(nums[i]) === Math.abs(candidate) && nums[i] > candidate)
        ) {
            candidate = nums[i];
        }
    }

    return candidate;
}
