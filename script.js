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
document.querySelector('.number').textContent = randomNumber;

document.querySelector('.check').addEventListener('click', function () {
  const guessOutput = Number(document.querySelector('.guess').value);
  console.log(guessOutput);
  if (!guessOutput) {
    document.querySelector('.message').textContent = 'Please enter a number';
  } else if (guessOutput === randomNumber) {
    document.querySelector('.message').textContent = 'Correct!';
  } else if (guessOutput > randomNumber) {
    document.querySelector('.message').textContent = 'Too High';
  } else if (guessOutput < randomNumber) {
    document.querySelector('.message').textContent = 'Too Low';
  }
});
