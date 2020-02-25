"use strict";
let evenNumbers = (a, b) => {
	let sum = 0;
	let counter = 0;
	for (let i = a; i <= b; i++) {
		if (i % 2 == 0) {
			sum += i;
			counter++;
		}
	}
	return `Сумма чётных чисел в диапазоне от 1 до 99 равно: ${sum}, количество: ${counter}.`;
};
console.log(evenNumbers(1, 99));

