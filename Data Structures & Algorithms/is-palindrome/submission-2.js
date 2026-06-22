class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const removeWhiteSpace = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, '').split(' ').join('');

        let i = 0;
        let j = removeWhiteSpace.length-1;

        while(i<j){
            if(removeWhiteSpace[i] === removeWhiteSpace[j]){
                i++;
                j--;
            }else{
                return false;
            }
        }

        return true;
    }
}
