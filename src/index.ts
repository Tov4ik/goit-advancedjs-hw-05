import { concatenation } from './concatenation.js';

const button = document.querySelector('button');
const input = document.querySelector('input');

button?.addEventListener('click', () => {
  const firstWord = input?.value ?? '';
  concatenation(firstWord, 'hello');
});