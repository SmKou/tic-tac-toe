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
        this.board[x][y] = this.isXturn ? "x" : "o";
    }

    checkForPlayer(player) {
        return player ? 'x' : 'o'
    } 

    /*
    NOTE: Removed || statement bc would return true regardless of player as long as row, column or diagonal was filled
    - Added player
    - Not sure about diagonal
    */
    isWon(movePosition) {
        const [x, y] = movePosition;
        const player = checkForPlayer(this.isXTurn);
        //check row
        if (this.board[x].every((e) => (e === player))) {
            return true;
        }
        //check column
        if (this.board.every((e) => e[y] === player)) {
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