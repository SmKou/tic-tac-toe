class GameState {
    constructor() {
        this.board = [];
        this.init();
        this.isXTurn = true;
    }
    
    init() {
        /* x = row, y = col */
        for (let x = 0; x < 3; x++) {
            this.board[x] = [];
            for (let y = 0; y < 3; y++)
                this.board[x][y] = '-';
        }
            
    }

    makeMove(position) {
        const [x, y] = position;
        this.board[x][y] = this.isXturn ? "X" : "O";
    }

    isWon(movePosition) {
        const [x, y] = movePosition;
        //check row
        if (this.board[x].every((e) => (e === "X")) || 
                this.board[x].every((e) => (e === "O"))) {
            return true;
        }
        //check column
        if (this.board.every((e) => e[y] === "X") || 
                this.board.every((e) => e[y] === "O")) {
            return true;
        }

        //check diagonals (if on a diagonal)
        if (x === y) {
            if (this.board.every((e, i) => e[i] === "X") || 
                    this.board.every((e, i) => e[i] === "O")) {
                return true;
            }
        }
        if (x + y === 2) {
            if (this.board.every((e, i) => e[2 - i] === "X") || 
                    this.board.every((e, i) => e[2 - i] === "O")) {
                return true;
            }
        }
    }
}

const controller = new GameState();