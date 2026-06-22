class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let obj = {};
        for(let i=0; i<nums.length; i++){
            if(obj[nums[i]]){
                obj[nums[i]]++;
            }else{
                obj[nums[i]] = 1;
            }
        }

        return Object.entries(obj).sort(([,a],[,b])=>b-a).slice(0,k).map((arr)=>arr[0]);
    }
}
