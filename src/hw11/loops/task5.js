"use strict";
let sum1 = (number) => {
	if (typeof number !== "number") {
		return "Введите число"
	}
	number = Math.abs(number);
	let s = 0;
	while (number > 0) {
		s = s + (number % 10);
		number = parseInt(number / 10);
	} 
	return s;
};
console.log(sum1(64));