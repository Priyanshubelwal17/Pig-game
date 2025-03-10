'use strict';

// Selecting elements
const player0E1 = document.querySelector('.player--0');
const player1E1 = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const current0E1 = document.getElementById('current--0');
const current1E1 = document.getElementById('current--1');

const diceE1 = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnROll = document.querySelector('.btn--roll');
const btnhold = document.querySelector('.btn--hold');
const winnerMessage = document.getElementById('winnerMessage');

const swtichPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0E1.classList.toggle('player--active');
  player1E1.classList.toggle('player--active');
};

// Starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceE1.classList.add('hidden');

const scores = [0, 0];
let playing = true;

let currentScore = 0;
let activePlayer = 0;

// Rolling dice functionality
btnROll.addEventListener('click', function () {
  console.log(3);
  if (playing) {
    //  1. Generating a random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;
    // 2.Display dice
    diceE1.classList.remove('hidden');
    diceE1.src = `dice-${dice}.png`;
    //   3. Check for rolled 1: if true, switch to next player
    if (dice !== 1) {
      // Add dice to current score
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
      // current0E1.textContent = currentScore;
    } else {
      //   Add dice to current score
      swtichPlayer();
    }
  }
});

btnhold.addEventListener('click', function () {
  if (playing) {
    // 1. Add current score to active player's score
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    // 2. Check if player's score is >=100
    if (scores[activePlayer] >= 10 || currentScore >= 10) {
      // Finish the game
      diceE1.classList.add('hidden');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      playing = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
      winnerMessage.textContent = `🎉 Player ${activePlayer + 1} Wins! 🏆`;
      winnerMessage.classList.remove('hidden');
    } else {
      // Switch to the next player
      swtichPlayer();
    }
  }
});

btnNew.addEventListener('click', function () {
  currentScore = 0;
  playing = true;
  diceE1.classList.add('hidden');
  document.getElementById('current--0').textContent = currentScore;
  document.getElementById('current--1').textContent = currentScore;
  document.getElementById('score--0').textContent = 0;
  document.getElementById('score--1').textContent = 0;

  document
    .querySelector(`.player--${activePlayer}`)
    .classList.remove('player--winner');

  document.querySelector(`.player--0`).classList.add('player--active');
  winnerMessage.classList.add('hidden');
});
