class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
        let res = [];

        let lp = 0;
        let rp = k-1;

        while(rp < nums.length){
            res.push(Math.max(...nums.slice(lp, rp+1)));
            lp++;
            rp++;
        }

        return res;
    }
}
