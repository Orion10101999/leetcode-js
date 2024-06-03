const isAnagram =  (s,t) => {

    s = s.split("").sort().join("")
    
    t = t.split("").sort().join("")
    
    return s === t

}

let s1 = "anagram";
let t1 = "nagaram";

let s2 = "rat"
let t2 = "car"

console.log(isAnagram(s1 , t1));
console.log(isAnagram(s2 , t2));


