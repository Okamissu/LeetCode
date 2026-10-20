function majorityElement(nums: number[]): number {
    const counts = new Map<number, number>();

    for (let num of nums) {
        counts.set(num, (counts.get(num) ?? 0) + 1);
        if (counts.get(num) > nums.length/2) return num
    }

    return -1; 
};
