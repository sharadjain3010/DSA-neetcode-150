class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const pre = [1];
        const post = [1];
        
        for(let i=1; i<nums.length; i++){
            pre.push(pre[i-1]*nums[i-1]);
        }
        console.log('pre - ',pre);
        for(let i=nums.length-1; i>0; i--){
            post.unshift(nums[i]*post[0]);
        }
        console.log('post - ',post)
        
        return pre.map((el,i)=>el*post[i]);

    }
}

                                