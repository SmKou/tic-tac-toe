const gameboard = document.querySelector('.gameboard');
const warning = document.querySelector('.warning');
const restart = document.querySelector('#restart-btn');

const handleGameBoard = (e) => {
    const eId = e.target.id;
    const square = document.querySelector('#' + eId);
    const [x, y] = eId
        .split('-')
        .map(c => parseInt(c[1]) - 1);
    
    warning.innerText = '';
    if (!square.classList.contains('x') && !square.classList.contains('o'))
        square.classList.add(controller.isXTurn ? 'x' : 'o');
    else
        warning.innerText = 'Already taken. Player ' + controller.checkForPlayer().toUpperCase() + ', you lose your turn.'
    controller.makeMove([x, y]);
    const winner = controller.isWon([x, y]);
    if (winner) {
        warning.innerText = 'The winner is Player ' + controller.checkForPlayer().toUpperCase();
        restart.classList.add('active');
        gameboard.onclick = null;
    }
    else
        controller.isXTurn = !controller.isXTurn;
}
gameboard.onclick = handleGameBoard;

restart.addEventListener('click', () => {
    controller.init();
    warning.innerText = '';
    restart.classList.remove('active');
    gameboard.onclick = handleGameBoard;
    document.querySelectorAll('.square').forEach(squ => {
        if (squ.classList.contains('x'))
            squ.classList.remove('x');
        if (squ.classList.contains('o'))
            squ.classList.remove('o');
    });
})