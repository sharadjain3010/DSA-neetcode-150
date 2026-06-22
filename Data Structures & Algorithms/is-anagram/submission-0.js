class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const counter={};
        for(let i=0; i<s.length; i++){
            counter[s[i]] ? counter[s[i]] = counter[s[i]] + 1 :  counter[s[i]] = 1;
        }
        console.log('counter - ',counter);
        for(let j=0; j<t.length; j++){
            if(counter[t[j]]) {
                counter[t[j]] > 1 ? counter[t[j]] = counter[t[j]] - 1 : delete counter[t[j]]; 
            }else{
                return false;  
            }
        }
        console.log('counter 2 - ',counter);

       return (Object.keys(counter).length === 0) ? true : false;
    }
}
