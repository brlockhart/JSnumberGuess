'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'Correct Number!';
// console.log(document.querySelector('.message').textContent);

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 19;

// const guessConst = (document.querySelector('.guess').value = 17);
// console.log(document.querySelector('.guess').value);
// console.log(guessConst);

const randomNumber = Math.trunc(Math.random() * 20);
let score = 20;

document.querySelector('.check').addEventListener('click', function () {
  const guessOutput = Number(document.querySelector('.guess').value);
  console.log(guessOutput);
  //when there is no input
  if (!guessOutput) {
    document.querySelector('.message').textContent = 'Please enter a number';
    //when the correct number is guessed
  } else if (guessOutput === randomNumber) {
    document.querySelector('.number').textContent = randomNumber;
    document.querySelector('.message').textContent = 'Correct!';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    //when the guess is too high
  } else if (guessOutput > randomNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too High';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'Game Over!';
      document.querySelector('.score').textContent = 0;
    }
    //when the guess is too low
  } else if (guessOutput < randomNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too Low';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'Game Over!';
      document.querySelector('.score').textContent = 0;
    }
  }
});
/*
const pOrange = (document.querySelectorAll('p').style.color = 'orange');
array.forEach(function (pOrange) {
  console.log(pOrange);
});
*/
