class GameState {
    constructor() {
        this.board = [];
        this.wins = [0, 0];
        this.isXTurn;
        this.init();
    }
    
    init() {
        /* x = row, y = col */
        for (let x = 0; x < 3; x++) {
            this.board[x] = [];
            for (let y = 0; y < 3; y++)
                this.board[x][y] = '-';
        } 
        this.isXTurn = 1;
    }

    makeMove(position) {
        const [x, y] = position;
        this.board[x][y] = this.isXTurn ? "x" : "o";
    }

    checkForPlayer() {
        return this.isXTurn ? 'x' : 'o'
    } 

    isWon(movePosition) {
        const [x, y] = movePosition;
        const player = this.checkForPlayer();
        if (this.board[x].every((e) => e === player)
            || this.board.every((e) => e[y] === player)
            || this.board.every((e, i) => e[i] === player)
            || this.board.every((e, i) => e[2 - i] === player)) {
            this.wins[this.isXTurn]++;
            return true;
        }
        return false;
    }
}

const controller = new GameState();