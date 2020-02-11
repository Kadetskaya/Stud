"use strict";
let sum = 0;
let counter = 0;
for (let i = 1; i < 100; i++) {
	if (i % 2 == 0) {
	sum += i;
	counter ++;
	}
};
console.log ("Сумма чётных чисел в диапазоне от 1 до 99 равна: " + sum);
console.log ("Количество чётных чисел в диапазоне от 1 до 99 равно: " + counter);