"use strict";
let c = (a, b) => {
	if (a % 2 == 0) {
		return a*b;
	}
	return a+b;
};
console.log(c(6, 10));
