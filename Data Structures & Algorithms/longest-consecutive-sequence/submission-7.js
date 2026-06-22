class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
       let count = 1;
       let res = 0;

       let numsSet = new Set(nums);

       for(let i=0; i<nums.length; i++){
            let j=1;
            if(!numsSet.has(nums[i]-1)){
                while(numsSet.has(nums[i]+j)){
                    count++;
                    j++;
                }
            }
            res = Math.max(res, count);
            count = 1;
       }

    return res;
    }
}
