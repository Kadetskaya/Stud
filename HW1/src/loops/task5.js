"use strict";
let sum = (number) => {
	let s = 0;
	while (number > 0) {
		s = s + (number % 10);
		number = parseInt(number / 10);
	} 
	return s;
};
console.log(sum(number));