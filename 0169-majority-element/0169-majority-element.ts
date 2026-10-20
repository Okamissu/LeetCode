function majorityElement(nums: number[]): number {
    let count = 0;
    let response = nums[0];

    for (let i = 0; i < nums.length; i++) {
        if (count === 0) {
            response = nums[i];
        }

        if (nums[i] === response) {
            count++;
        } else {
            count--;
        }
    }

    return response;
}
