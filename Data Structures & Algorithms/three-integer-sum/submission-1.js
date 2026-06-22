class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum = function(arr) {
    const target = 0;
    const sortedArr = arr.sort((a,b)=>a-b);
    const res = []
        for(let i=0; i<sortedArr.length; i++){
                if(i>0 && sortedArr[i] === sortedArr[i-1]){
                    continue;
                }
            let twoSumRes = this.twoSum(sortedArr.slice(i + 1), target-sortedArr[i]);
            for(let j=0; j<twoSumRes.length; j++){
                res.push([sortedArr[i], ...twoSumRes[j]]);
            }
        }
        return res;
    };

    twoSum = function(arr, target){
    let lp = 0;
    let rp = arr.length-1;
    const res = [];

        while(lp<rp){
            if(arr[lp] + arr[rp] < target){
                lp++;
            }else if(arr[lp] + arr[rp] > target){
                rp--;
            }else{
                res.push([arr[lp], arr[rp]]);
                lp++;
                while(lp < rp && arr[lp] === arr[lp-1]) lp++;
            }
        }
        return res;
    }
}