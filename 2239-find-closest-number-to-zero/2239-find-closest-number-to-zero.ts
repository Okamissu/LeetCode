function findClosestNumber(nums: number[]): number {
    let closest = nums[0];

    for (const num of nums) {
        if (
            Math.abs(num) < Math.abs(closest) ||
            (Math.abs(num) === Math.abs(closest) && num > closest)
        ) {
            closest = num;
        }
    }

    return closest;
}