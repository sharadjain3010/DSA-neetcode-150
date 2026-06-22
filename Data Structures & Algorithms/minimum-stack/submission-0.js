class MinStack {
    minValMap = {};
    constructor() {
        this.arr = [];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        if(this.arr.length === 0){
             this.minValMap[this.arr.length] = val;
        }else{
             this.minValMap[this.arr.length] = Math.min(this.minValMap[this.arr.length-1], val);
        }
        this.arr.push(val);
       
    }

    /**
     * @return {void}
     */
    pop() {
        if(this.arr.length > 0){
            delete this.minValMap[this.arr.length]
            this.arr.pop();
        }
    }

    /**
     * @return {number}
     */
    top() {
        if(this.arr.length > 0){
            return this.arr[this.arr.length-1];
        }
    }

    /**
     * @return {number}
     */
    getMin() {
        if(this.arr.length > 0){
            return this.minValMap[this.arr.length-1];
        }

    }
}
