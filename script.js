'use strict';

let randomNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
}
const displayScore = function (scoreArg) {
    document.querySelector('.score').textContent = scoreArg;
}

document.querySelector('.check').addEventListener('click', function () {
    const guessOutput = Number(document.querySelector('.guess').value);

    //when there is no input
    if (!guessOutput) {
        displayMessage('You must enter a number...');
        //when the correct number is guessed
    } else if (guessOutput === randomNumber) {
        document.querySelector('.number').textContent = randomNumber;
        displayMessage('Correct!')
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        if (highScore < score) {
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }
    }
    //reducing repeated code
    else if (guessOutput !== randomNumber) {
        if (score > 1) {
            displayMessage(guessOutput > randomNumber ? 'Too High' : 'Too Low');
            score--;
            displayScore(score);
        } else {
            displayMessage('Game Over!');
            displayScore(0);
        }
    }
});
  //functionality for "again" button
  document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    randomNumber = Math.trunc(Math.random() * 20) + 1;
    displayMessage('Start guessing...');
    displayScore(score);
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
  });
