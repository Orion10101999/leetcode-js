// 1. Two Sum

const array1 = [2,7,11,15]
const array2 = [3,2,4]
const array3 = [3,3]
const target1 = 9
const target2 = 6
const target3 = 6

console.log(twoSum(array3,target3));


function twoSum(nums,target){
    const pairIdx = new Map();
    for(let i = 0; i < nums.length; i++){
        const num = nums[i]
        const value = target-num
        if(pairIdx.has(value)){
            return [pairIdx.get(value),i]
        }
        pairIdx.set(num,i)
    }
}

