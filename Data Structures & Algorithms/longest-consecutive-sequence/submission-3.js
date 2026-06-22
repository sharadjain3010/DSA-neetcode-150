class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        if(nums.length === 0){
            return 0;
        }

        const sortedNums = nums.sort((a,b)=>a-b);
        let length = 1;
        let res = 1;

        for(let i=1; i<sortedNums.length; i++){
            if(sortedNums[i-1]+1 === sortedNums[i]){
                length++;
            }else if(sortedNums[i-1] === sortedNums[i]){
                continue;
            }else{
                res = Math.max(res, length);
                length = 1;
            }
        }

        return Math.max(res, length);
    }
}

