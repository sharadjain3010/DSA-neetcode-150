class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const arr = [];
        const brackets = {
            ')':'(',
            '}':'{',
            ']':'['
        };

        for(let i=0; i<s.length; i++){
            if(brackets[s[i]]){
                const el  = arr[arr.length-1];
               
                if(arr.length && el === brackets[s[i]]){
                    arr.pop();
                }else{
                    return false;
                }
            }else{
                arr.push(s[i]);

            }
        }
        return arr.length > 0 ? false : true;
    }
}
