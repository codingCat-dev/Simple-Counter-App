'use strict';

const counter = document.querySelector('.counter');
const buttons = document.querySelectorAll('.btn');

counter.textContent = 0;

buttons.forEach(button => {
  button.addEventListener('click', e => {
    if (e.target.classList.contains('increase')) {
      counter.textContent++;
      setCounterColor();
    }
    if (e.target.classList.contains('decrease')) {
      counter.textContent--;
      setCounterColor();
    }
    if (e.target.classList.contains('reset')) {
      counter.textContent = 0;
      setCounterColor();
    }
  });
});

const setCounterColor = () => {
  if (counter.textContent > 0) {
    counter.style.color = 'green';
  } else if (counter.textContent < 0) {
    counter.style.color = 'red';
  } else {
    counter.style.color = 'black';
  }
};
