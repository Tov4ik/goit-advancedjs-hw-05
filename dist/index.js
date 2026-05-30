import { concatenation } from './concatenation.js';
const button = document.querySelector('button');
const input = document.querySelector('input');
button === null || button === void 0 ? void 0 : button.addEventListener('click', () => {
    var _a;
    const firstWord = (_a = input === null || input === void 0 ? void 0 : input.value) !== null && _a !== void 0 ? _a : '';
    concatenation(firstWord, 'hello');
});
//# sourceMappingURL=index.js.map