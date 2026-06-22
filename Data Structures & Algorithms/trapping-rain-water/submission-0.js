class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let lb = [0];
        let rb = [0];
        let res = 0;
        let lbm = 0;
        let rbm = 0;

        for(let i=1; i<height.length; i++){
            lbm = Math.max(height[i-1], lbm);
            lb.push(lbm);
        }
        console.log('left bounmdary - ',lb);
        for(let i=height.length-1; i>0; i--){
            rbm = Math.max(height[i], rbm);
            rb.unshift(rbm);
        }
        console.log('right bounmdary - ',rb);

        for(let i=1; i<height.length; i++){
            let water = (Math.min(lb[i], rb[i]) - height[i]) > 0 ? (Math.min(lb[i], rb[i]) - height[i]) : 0;
            res = res+water;
        }

        return res;
    }
}


