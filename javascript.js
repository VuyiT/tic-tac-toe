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

    return {getBoard};
}