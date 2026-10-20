function majorityElement(nums: number[]): number {
    let count = 1
    let response = nums[0]

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] === response)
            count++
        else
            count--

        if (count < 0){
            count = 1
            response = nums[i]
        }
    }

    return response
}
