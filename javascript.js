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

    const switchPlayer = () => {
        currentPlayerIndex = 1 - currentPlayerIndex;
    };

    const checkWin = () => {
        const currentBoard = gameboard.getBoard();
        const marker = players[currentPlayerIndex].getMarker();
        const rows = 3; 
        const columns = 3;

        for (let r = 0; r < rows; r++) {
            if (currentBoard[r][0] === marker && currentBoard[r][1] === marker && currentBoard[r][2] === marker) {
                return true;
            }
        }

        for (let c = 0; c < columns; c++) {
            if (currentBoard[0][c] === marker && currentBoard[1][c] === marker && currentBoard[2][c] === marker) {
                return true;
            }
        }

        if (currentBoard[0][0] === marker && currentBoard[1][1] === marker && currentBoard[2][2] === marker) {
            return true;
        }
        if (currentBoard[0][2] === marker && currentBoard[1][1] === marker && currentBoard[2][0] === marker) {
            return true;
        }

        return false;
    };

    const checkTie = () => {
        return gameboard.getBoard().flat().every(cell => cell !== '');
    };

    const playTurn = (cellIndex) => {
        if (isGameOver) {
            console.log("Game is over. Start a new game to play again.");
            return;
        }

        const currentMarker = players[currentPlayerIndex].getMarker();
    const success = gameboard.markCell(cellIndex, currentMarker); 

        if (success) {
            gameboard.printBoard();

            if (checkWin()) {
                console.log(`${players[currentPlayerIndex].getName()} wins!`);
                isGameOver = true;
            } else if (checkTie()) {
                console.log("It's a tie!");
                isGameOver = true;
            } else {
                switchPlayer();
                console.log(`${players[currentPlayerIndex].getName()}'s turn. Enter a number (1-9) to place your marker.`);
            }
        } else {
            console.log("Invalid move. That cell is already taken or your input is out of range. Try again.");
            gameboard.printBoard(); 
        }
    };

    const resetGame = () => {
        gameboard.resetBoard();
        isGameOver = false;
        currentPlayerIndex = 0;
        console.log("Game has been reset.");
        gameboard.printBoard();
        console.log(`${players[currentPlayerIndex].getName()}'s turn. Enter a number (1-9) to place your marker.`);
    };

    return {
        start,
        playTurn,
        resetGame
    };
})();