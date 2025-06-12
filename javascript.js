function Gameboard() {
    // The layout of the board (3x3)
    const rows = 3;
    const columns = 3;
    const board = []; //now insert the 3 x 3 into the board but oe must be inside another. Each cell must represent a row coordinante and a column coordinate
    const cell = function(row, column) {
        for (let i = 0; i < rows; i++) {
            board[i] = [];
            for (let j = 0; j < columns; j++) {
                //push j into row
                board[i].push(j);
            }
            // board.push(row);
        }
    }

    function state() {
        // if a cell is filled, make it unable to be played
        if (cell.contains(token)) {
            // decrease the number of cells by 1
            for(let z = 0; z < cells; z--) {
                rows--;
                columns--;
            }
            
            //until there are no more cells left
        }
    }
    // The state of the board as each player plays their turn
    // The cell that each player plays on (which is a combination of row and column coordinates)
}