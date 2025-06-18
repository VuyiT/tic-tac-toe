function Gameboard() {
    const rows = 3;
    const columns = 3;
    const board = []; 
    
    for (let i = 0; i < rows; i++) {
        board.push(Array(columns).fill(""));
    }

    const getBoard = () => board.map(rows => [...rows]);

    const getCoordinates = (index) => {
        if (index < 1 || index > (rows * columns)) {
            return [-1, -1];
        }
        const row = Math.floor((index - 1) / columns);
        const col = (index - 1) % columns;
        return [row, col];
    };

    const markCell = (index, marker) => {
        const [row, col] = getCoordinates(index);
        if (row !== -1 && board[row][col] === "") {
            board[row][col] = marker;
            return true;
        }
        return false;
    };

    const resetBoard = () => {
        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < columns; c++) {
                board[r][c] = '';
            }
        }
    };

    return {getBoard, markCell, resetBoard};
}