function majorityElement(nums: number[]): number {
    nums.sort((a, b) => a - b);

    const middleIndex = Math.floor(nums.length / 2);
    
    return nums[middleIndex];
}
