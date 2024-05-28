// Flat the Array 

const arr = [2,[3,4],[10,[5,6],[6,7,8],[2,[34,35,[18,19]]]]]

const newArray = []

const flatArray = (arr) =>{
    for (let i = 0; i < arr.length; i++) {
        const item = Array.isArray(arr[i])
        if(item) {
            flatArray(arr[i])
        }else{
            newArray.push(arr[i])
        }
    }
}
flatArray(arr)
console.log(newArray);


// Two Sum Problem 