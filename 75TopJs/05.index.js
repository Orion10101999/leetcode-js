let nums = [1,2,3,4]

const prefix = []
    
// Move left in the input array
for (let i=0; i<nums.length; i++) {
    // If i === 0, start with `1`, since there is no prefix
    if (i===0) {
        prefix[i] = 1
    } else {
        // Otherwise, multiply nums[i-1] times the prefix at position i-1,
        // and add that to the prefix array at position i
        prefix[i] = nums[i-1] * prefix[i-1]
    }
}
