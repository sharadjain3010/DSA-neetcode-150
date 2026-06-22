class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        let arr = [];
        let operator = new Set(['+','-','*','/']);
        let i = 0;

        while(i<tokens.length){
            if(tokens[i] === '+'){
                let r = arr.pop();
                let l = arr.pop();
                let res = l + r;
                arr.push(res);
            }else if(tokens[i] === '-'){
                let r = arr.pop();
                let l = arr.pop();
                let res = l - r;
                arr.push(res);
            }else if(tokens[i] === '*'){
                let r = arr.pop();
                let l = arr.pop();
                let res = l * r;
                arr.push(res);
            }else if(tokens[i] === '/'){
                let r = arr.pop();
                let l = arr.pop();
                let res = Math.trunc(l / r);
                arr.push(res);
            }else{
                arr.push(Number(tokens[i]));
            }
            i++;
        }

        return arr.pop();
    }
}
