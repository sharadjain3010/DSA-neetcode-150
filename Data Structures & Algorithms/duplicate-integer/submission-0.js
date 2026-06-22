class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const existing = {};
        for(let i=0; i<nums.length; i++){
            if(existing[nums[i]]){
                return true;
            }else{
                existing[nums[i]] = true;
            }
        }
        return false;
    }
}
