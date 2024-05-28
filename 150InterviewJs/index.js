/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */

var rotate = function (nums, k) {
    if(k===0) return nums
    let l = nums.length
    k = k%l
    let result = []
    for(let i = 0 , j = l-1; i < k ; i++ , j--){
        let temp = nums[j]
        console.log(j,temp);
        result[i] = temp
    }
    
    
    for(let i = 0 ; i<result.length;i++){
        nums[i] = result[i]
    }
    
    return nums

};
console.log(rotate([1,2,3,4,5,6,7],3));
/*

let arr = {'':[1,2,3,4,5,6,7]}
//rotate(arr,3)
console.log(Array.isArray(arr));

*/
/*
// Javascript program to rotate right an array by K times
    let arr = [ 1, 3, 5, 7, 9, 11 ];
    let n = arr.length;
    let k = 3; //No. of rotations
    k = k % n;
    let i, j;
    console.log(arr);
     
    // Reverse last k numbers
    for (i = n - k, j = n - 1; i < j; i++, j--) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    console.log(arr);
        
    // Reverse the first n-k terms
    for (i = 0, j = n - k - 1; i < j; i++, j--) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    console.log(arr);

      // Reverse the entire array
      for (i = 0, j = n - 1; i < j; i++, j--) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
 
console.log(arr);



*/


/*
let array = [1, 3, 5, 7, 9]
let result = []
let k = 2

let n = array.length

for (let i = 0; i < n ; i++) {
    if(i< k )
    {
        result[i]=array[n+i-k]
    }else{
        result[i]=array[i-k]

    }
}
console.log(result);



*/