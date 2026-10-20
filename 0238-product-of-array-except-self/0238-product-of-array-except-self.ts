function productExceptSelf(nums: number[]): number[] {
    const len = nums.length;

    const result: number[] = new Array(len).fill(0);
    result[0] = 1

    for (let i = 1; i < len; i++) {
        result[i] = result[i - 1] * nums[i - 1];
    }

    let suffixProduct = 1;

    for(let i = len - 1; i >=0; i--){
        result[i] *= suffixProduct;
        suffixProduct *= nums[i]
    }

    return result;
};