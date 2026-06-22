class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let lp = 0;
        let rp = 0;
        let charSet = [];
        let res = 0;

        while(rp < s.length){
            if(charSet.includes(s[rp])){
                res = Math.max(res, charSet.length);
                while(charSet.includes(s[rp])){
                    charSet.shift();
                    lp++;
                }
            }else{
                charSet.push(s[rp]);
                rp++;
            }
        }
        return Math.max(res, charSet.length);
    }
}
