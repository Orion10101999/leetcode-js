function mergeString(word1,word2){
    
    let result = '';
     for (let i = 0; i < Math.max(word1.length, word2.length); i++) {
       if (i < word1.length) result += word1[i];
       if (i < word2.length) result += word2[i];
     }
     return result;
     
    }
    
    console.log(mergeString("abc","pqr"));
    
    console.log(mergeString("ab","pqrs"));
    console.log(mergeString("abcd","pq"));
    
    