'use strict';

//Selecting Elements
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

//Buttons
const buttonNew = document.querySelector('.btn--new');
const buttonRoll = document.querySelector('.btn--roll');
const buttonHold = document.querySelector('.btn--hold');

console.log(score0El, score1El, diceEl);
console.log(buttonNew, buttonHold, buttonRoll);

score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;

const switchPlayer = () => {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

function rollDice() {
  //1. Generating a randon Dice
  const dice = Math.trunc(Math.random() * 6) + 1;
  //2. Display Dice
  diceEl.classList.remove('hidden');
  diceEl.src = `./dice-${dice}.png`;

  //3. Check for rolled 1
  if (dice !== 1) {
    //Add dice to the current score
    currentScore += dice;
    document.getElementById(
      `current--${activePlayer}`
    ).textContent = currentScore;
  } else {
    //Swtich to next player
    switchPlayer();
  }
}

function holdButton() {
  //1.Add current score to active player
  scores[activePlayer] += currentScore;
  document.getElementById(`score--${activePlayer}`).textContent =
    scores[activePlayer];
  //2. check if player's score is >= 100

  //Finish the game
  //switch to next player
  switchPlayer();
}

buttonRoll.addEventListener('click', rollDice);
buttonHold.addEventListener('click', holdButton);
