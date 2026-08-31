function findClosestNumber(nums: number[]): number {
    let closestIndex = 0;
    
    for(let i = 1; i < nums.length; i++){
        const itemValue = Math.abs(nums[i])
        const closestValue = Math.abs(nums[closestIndex])

        if (itemValue < closestValue){
            closestIndex = i
        }
        else if (itemValue === closestValue){
            if(nums[i] > nums[closestIndex]){
                closestIndex = i
            }
        }
    }

    return nums[closestIndex]
};