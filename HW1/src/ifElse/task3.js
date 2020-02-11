"use strict";
let summ = 0;
let numbers = [3, -5, 11];
for (let i = 0; i < numbers.length; i++) {
	if (numbers[i] > 0) {
		summ += numbers[i];
	}
};
console.log(summ);