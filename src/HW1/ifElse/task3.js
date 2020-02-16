"use strict";
let sum = (a, b, c) => {
	let result = 0;
	if (a > 0) {
		result += a;
	}
	if (b > 0) {
		result += b;
	}
	if (c > 0) {
		result += c;
	}
	if (result > 0) {
		return result;
	}
	return "Все числа отрицательные.";
};
console.log(sum(3, 5, -11));