class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        let i = 0;
        let stack = [];
        let res = new Array(temperatures.length).fill(0);

        while(i < temperatures.length){
            if(stack.length === 0){
                stack.push({index:i, t:temperatures[i]});
            }else{
                let top = stack[stack.length-1];
                while(stack.length && temperatures[i] > top.t){
                    res[top.index] = i-top.index;
                    stack.pop();
                    top = stack[stack.length-1]
                }
                stack.push({index:i, t:temperatures[i]});
            }
            i++;
        }

        return res;
    }
}
