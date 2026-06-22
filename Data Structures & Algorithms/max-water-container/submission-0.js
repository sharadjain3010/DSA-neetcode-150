class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let l=0;
        let r=heights.length-1;
        let area = 0;

        while(l<r){
            let boundryHeight = Math.min(heights[l], heights[r]);
            let boundryArea = Math.abs(r-l)*boundryHeight;
            area = Math.max(area, boundryArea);

            if(heights[l] < heights[r]){
                l++;
            }else if(heights[l] > heights[r]){
                r--;
            }else{
                l++;
            }
        }

        return area;
    }
}
