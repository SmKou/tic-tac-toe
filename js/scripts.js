const gameboard = document.querySelector('.gameboard');
const warning = document.querySelector('.warning');
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
        warning.innerText = 'Already taken. Player ' + (Number(controller.isXTurn) + 1) + ', you lose your turn.'
    controller.isXTurn = !controller.isXTurn;
    controller.makeMove([x, y]);
    const winner = controller.isWon([x, y]);
    if (winner) {
        warning.innerText = 'The winner is Player ' + Number(controller.isXTurn);
        console.log(winner)
    }
}
gameboard.onclick = handleGameBoard;

document
    .querySelector('#restart-btn')
    .addEventListener('click', () => {
        controller.init();
        warning.innerText = '';
        gameboard.onclick = handleGameBoard;
        document.querySelectorAll('square').forEach(s => {
            if (s.classList.contains('x'))
                s.classList.remove('x');
            if (s.classList.contains('o'))
                s.classList.remove('o');
        })
    })