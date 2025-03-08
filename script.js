'use strict';

// Selecting elements
const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const current0E1 = document.getElementById('current--0');
const current1E1 = document.getElementById('current--1');

const diceE1 = document.querySelector('.dice');
const btnNew = document.querySelector('.btn-roll');
const btnROll = document.querySelector('.btn--roll');
const btnhold = document.querySelector('.btn--hold');

// Starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceE1.classList.add('hidden');

let currentScore = 0;

// Rolling dice functionality
btnROll.addEventListener('click', function () {
  //  1. Generating a random dice roll
  const dice = Math.trunc(Math.random() * 6) + 1;
  // 2.Display dice
  diceE1.classList.remove('hidden');
  diceE1.src = `dice-${dice}.png`;
  //   3. Check for rolled 1: if true, switch to next player
  if (dice !== 1) {
    // Add dice to current score
    currentScore += dice;
    current0E1.textContent = currentScore;
  } else {
    //   Add dice to current score
  }
});
