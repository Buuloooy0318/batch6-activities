"use strict";

//Global Variable
const board = document.querySelector(".board");
let playerX = true;
let isGameActive = true;
let status = document.querySelector(".game-status");
let displayPlayer = document.querySelector(".player");
let buttonGroup = document.querySelector(".button-grp");
let buttonRestart = document.querySelector(".btn-restart");
let previous = document.querySelector(".btn-previous");
let next = document.querySelector(".btn-next");

let gameBoard = [
  [0, 1, 2],
  [0, 1, 2],
  [0, 1, 2],
];

//create 2D Board
const createBoard = () => {
  for (let row = 0; row < gameBoard.length; row++) {
    for (let column = 0; column < gameBoard.length; column++) {
      let cell = document.createElement("div");
      cell.setAttribute("class", "cell");
      cell.setAttribute(
        "id",
        `${gameBoard[column][row]}-${gameBoard[row][column]}`
      );
      board.appendChild(cell);
    }
  }
};
createBoard();
const cells = document.querySelectorAll(".cell");

const gameStatus = () => {
  const topLeft = cells[0].classList[1];
  const midLeft = cells[1].classList[1];
  const bottomLeft = cells[2].classList[1];
  const topMid = cells[3].classList[1];
  const midMid = cells[4].classList[1];
  const bottomMid = cells[5].classList[1];
  const topRight = cells[6].classList[1];
  const midRight = cells[7].classList[1];
  const bottomRight = cells[8].classList[1];

  if (topLeft && topLeft === topMid && topLeft === topRight) {
    winner(topLeft);
    
  } else if (midLeft && midLeft === midMid && midLeft === midRight) {
    winner(midLeft);

    //row bottom
  } else if (
    bottomLeft &&
    bottomLeft === bottomMid &&
    bottomLeft === bottomRight
  ) {
    winner(bottomLeft);

    // column top
  } else if (topLeft && topLeft === midLeft && topLeft === bottomLeft) {
    winner(topLeft);

    // column middle
  } else if (topMid && topMid === midMid && topMid === bottomMid) {
    winner(topMid);

    // column right
  } else if (topRight && topRight === midRight && topRight === bottomRight) {
    winner(topRight);

    // diagonal
  } else if (topLeft && topLeft === midMid && topLeft === bottomRight) {
    winner(topLeft);

    // diagonal
  } else if (topRight && topRight === midMid && topRight === bottomLeft) {
    winner(topRight);
    // draw
  } else if (topLeft &&topMid &&topRight &&midLeft &&midMid &&midRight &&bottomLeft &&
    bottomMid && bottomRight
  ) {
    winner("Its a DRAW!!!");
  } else {
    playerX = !playerX;
    if (playerX) {
      displayPlayer.textContent = "X";
    } else {
      displayPlayer.textContent = "O";
    }
  }
};

function winner(symbol) {
  isGameActive = false;
  if (symbol === "X" || symbol === "O") {
    status.innerHTML = `Player ${symbol} has won`;
  } else {
    status.innerHTML = `${symbol}`;
  }
  for (const eachCell of cells) {
    eachCell.style.pointerEvents = "none";
  }
  document.querySelector(".btn-previous").style.visibility = "visible";
  document.querySelector(".btn-next").style.visibility = "hidden";
}

buttonRestart.addEventListener("click", function () {
  location.reload();
});

// Previous and Next Button Function
buttonGroup.addEventListener("click", function (e) {
  console.log("test");
});

for (const eachCell of cells) {
  eachCell.addEventListener("click", function (e) {
    //Prevent adding twice to the same cell
    if (e.target.classList[1] === "X" || e.target.classList[1] === "O") {
      return;
    }
    //Place X on the Board
    if (playerX) {
      e.target.classList.add("X");
      e.target.textContent = "X";
      gameStatus();
      //Place O on the Board
    } else {
      e.target.classList.add("O");
      e.target.textContent = "O";
      gameStatus();
    }
  });
}
