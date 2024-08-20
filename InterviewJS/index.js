function generateHash(str) {
    if(str.length > 280 || str === '') return false
    let arr = str.split(' ')
    let newArr = arr.map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    return "#" + newArr.join('');
  }
  
  
  
console.log(generateHash("my name is thapa technical"))

