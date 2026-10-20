function majorityElement(nums: number[]): number {
    const counts = new Map<number, number>();

    for (let num of nums) {
        counts.set(num, (counts.get(num) ?? 0) + 1);
    }

    for (let [key, val] of counts.entries()) {
        if (val > nums.length / 2) return key; 
    }
    
    return -1; 
};
