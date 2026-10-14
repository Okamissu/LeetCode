function summaryRanges(nums: number[]): string[] {
    const result: string[] = []
    if (nums.length === 0) return result

    let start = nums[0];

    for (let i = 1; i <= nums.length; i++) {
        if (i === nums.length || nums[i] - 1 !== nums[i - 1]) {
            const end = nums[i - 1]


            result.push(
                start === end ? `${start}` : `${start}->${end}`
            );

            start = nums[i];
        }
    }
    return result;

}

// function summaryRanges(nums: number[]): string[] {
//     if (nums.length === 0) return []
//     if (nums.length === 1) return [`${nums[0]}`]

//     let arraysCount = 0;
//     let prev = nums[0]
//     const result = [[prev]]

//     for (let i = 1; i < nums.length; i++) {
//         if (prev !== nums[i] - 1) arraysCount++
//         if(!Array.isArray(result[arraysCount])) result[arraysCount] = []

//         result[arraysCount].push(nums[i])
//         prev = nums[i]
//     }

//     return formatResult(result)
// };

// function formatResult(arr: number[][]): string[]{
//     const result = []
//     for(const nums of arr){
//         if(nums.length === 1) result.push(`${nums[0]}`)
//         else result.push(`${nums.at(0)}->${nums.at(-1)}`)
//     }

//     return result
// }