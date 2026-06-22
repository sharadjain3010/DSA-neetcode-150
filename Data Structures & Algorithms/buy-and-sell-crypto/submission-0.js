class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let maxProfit = 0;
        let lp = 0;
        let rp = 1;

        while(rp < prices.length){
            const profit = prices[rp]-prices[lp];
            if(profit > 0){
                maxProfit = Math.max(maxProfit, profit);
                rp++;
            }else{
                lp = rp;
                rp++;
            }

        }
        return maxProfit;
    }
}
