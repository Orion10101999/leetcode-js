const FindLongestStringLength = (str) => {
    if(str.trim().length === 0) return false
    let words = str.split(" ")
    // words = words.sort((a,b) => b.length - a.length)
    return words.reduce((accum,currword) => (currword.length > accum.length ? currword : accum))    
}


const string = "I Love JavaScript with my whole Mind but ArtificialIntelligence . "
const str = "   "
console.log(FindLongestStringLength(string));
console.log(FindLongestStringLength(str));

