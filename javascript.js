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

    const printBoard = () => {
        console.log(`${board[0][0] || "1"} | ${board[0][1] || "2"} | ${board[0][2] || "3"} 
            ---+---+---
            ${board[1][0] || "4"} |${board[1][1] || "5"} |${board[1][2] || "6"} 
            ---+---+---
            ${board[2][0] || "7"} |${board[2][1] || "8"} |${board[2][2] || "9"}`);
    };

    return {getBoard, markCell, resetBoard, printBoard};
}

function Player(name, marker) {
    const getName = () => name;
    const getMarker = () => marker;

    return {getName, getMarker};
}

const Game = (() => {
    let players = [];
    let currentPlayerIndex;
    let gameboard;
    let isGameOver;

    const start = (playerOneName = "Player X", playerTwoName = "Player O") => {
        players = [
            Player(playerOneName, "X"),
            Player(playerTwoName, "O"),
        ];
        
        currentPlayerIndex = 0;
        gameboard = Gameboard();
        isGameOver = false;
        console.log("Welcome to Tic-Tac-Toe!");
        console.log(`${players[0].getName()} is '${players[0].getMarker()}' and ${players[1].getName()} is '${players[1].getMarker()}'`);
        gameboard.printBoard();
        console.log(`${players[currentPlayerIndex].getName()}'s turn. Enter a number (1-9) to place your marker.`);
    };
})