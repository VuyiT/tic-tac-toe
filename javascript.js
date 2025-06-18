function Gameboard() {
    const rows = 3;
    const columns = 3;
    const board = []; 
    
    for (let i = 0; i < rows; i++) {
        board.push(Array(columns).fill(""));
    }
}