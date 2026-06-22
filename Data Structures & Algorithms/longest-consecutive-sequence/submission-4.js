class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */

    longestConsecutive(nums) {
        const s = new Set(nums);
        let arr = [];

        for(let i=0; i<nums.length; i++){
            if(!s.has(nums[i]-1)){
                let tempArr = [];
                tempArr.push(nums[i]);
                let j=1;
                while(s.has(nums[i]+j)){
                    tempArr.push(nums[i]+j);
                    j++
                }
                arr.push(tempArr);
            }
        }
       return arr.reduce((accLen, el)=>{
            return Math.max(accLen, el.length); 
        }, 0)
    }

    // longestConsecutive(nums) {
    //     if(nums.length === 0){
    //         return 0;
    //     }

    //     const sortedNums = nums.sort((a,b)=>a-b);
    //     let length = 1;
    //     let res = 1;

    //     for(let i=1; i<sortedNums.length; i++){
    //         if(sortedNums[i-1]+1 === sortedNums[i]){
    //             length++;
    //         }else if(sortedNums[i-1] === sortedNums[i]){
    //             continue;
    //         }else{
    //             res = Math.max(res, length);
    //             length = 1;
    //         }
    //     }

    //     return Math.max(res, length);
    // }
}

