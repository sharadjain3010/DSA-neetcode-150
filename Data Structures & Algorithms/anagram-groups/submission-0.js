class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const obj = {};

        for(let i=0; i<strs.length; i++){
            const count = new Array(26).fill(0);
            for(let j=0; j<strs[i].length; j++){
               count[strs[i][j].charCodeAt() -  'a'.charCodeAt()]++;
            }
            if(obj[count]){
                 obj[count].push(strs[i]);
            }else{
                 obj[count] = [strs[i]];
            }
        }
       return Object.values(obj);
    }
}