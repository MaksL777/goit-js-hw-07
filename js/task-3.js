'use strict';

const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

nameInput.addEventListener('input', (event) => {
  const trimValue = event.currentTarget.value.trim();

  if (trimValue === '') {
    nameOutput.textContent = 'Anonymous';
  } else {
    nameOutput.textContent = trimValue;
  }
});
