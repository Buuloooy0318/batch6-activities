const statusDisplay = document.querySelector('.game-status');

var gameActive = true;
var currentPlayer = "X";
var gameState = ["", "", "", "", "", "", "", "", ""];


const winningMessage = () => `Player ${currentPlayer} has won!`;
const drawMessage = () => `It's a DRAW`;
const currentPlayerTurn = () => `It's ${currentPlayer}'s turn`;

statusDisplay.innerHTML = currentPlayerTurn();


const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 4, 6],
    [2, 5, 8]
];

const cells = document.querySelectorAll('.cell');
cells.forEach(cell => {
    cell.setAttribute("onclick", playerChange());
    console.log(cell);
});

function handleCellPlayed(clickedCell, clickedCellIndex){
    gameState[clickedCellIndex] = currentPlayer;
    clickedCell.innerHTML = currentPlayer;
    console.log(`Moves: ${currentPlayer}`);
}

function playerChange() {
    currentPlayer = currentPlayer === "X" ? "O" : "X";
    statusDisplay.innerHTML = currentPlayerTurn();
}

function cellClick(clickedCellEvent){
    const clickedCell = clickedCellEvent.target;
    const clickedCellIndex = parseInt(clickedCell.getAttribute('data-index'));

    if (gameState[clickedCellIndex] !== "" || !gameActive){
        return;
    }

    handleCellPlayed(clickedCell, clickedCellIndex);
    handleResultValidation();
}


function handleResultValidation() {
    let roundWon = false;
    for (let i = 0; i <= 7; i++) {
        const winCondition = winningConditions[i];
        let a = gameState[winCondition[0]];
        let b = gameState[winCondition[1]];
        let c = gameState[winCondition[2]];
        if (a === '' || b === '' || c === '') {
            continue;
        }
        if (a === b && b === c) {
            roundWon = true;
            break
        }
    }

    if (roundWon) {
        statusDisplay.innerHTML = winningMessage();
        gameActive = false;
        return;
    }

    let roundDraw = !gameState.includes("");
    if (roundDraw) {
        statusDisplay.innerHTML = drawMessage();
        gameActive = false;
        return;
    }

    playerChange();
}

function restartGame() {
    gameActive = true;
    currentPlayer = "X";
    gameState = ["", "", "", "", "", "", "", "", ""];
    statusDisplay.innerHTML = currentPlayerTurn();
    document.querySelectorAll('.cell').forEach(cell => cell.innerHTML = "");
}

function previousMove(){

}

function nextMove(){
    
}

document.querySelectorAll('.cell').forEach(cell => cell.addEventListener('click', cellClick));
document.querySelector('.btn-restart').addEventListener('click', restartGame);
document.querySelector('.btn-previous').addEventListener('click', previousMove);
document.querySelector('.btn-next').addEventListener('click', nextMove);



// console.log(statusDisplay)