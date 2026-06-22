class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        const obj = {};
        for(let i=0; i<board.length; i++){
            for(let j=0; j<board[i].length; j++){
                const row = `${board[i][j]} is in ${i} row`;
                const column = `${board[i][j]} is in ${j} column`;
                const square = `${board[i][j]} is in ${Math.floor((i)/3)}${Math.floor((j)/3)} square`;
                console.log(`${row} -------- ${column}   ----------------      ${square}`);
                if((obj[row] || obj[column] || obj[square]) && board[i][j] !== '.'){
                    return false;
                }else{
                    obj[row] = true; 
                    obj[column] = true; 
                    obj[square] = true;
                }
            }   
        }

        return true;
    }
}
