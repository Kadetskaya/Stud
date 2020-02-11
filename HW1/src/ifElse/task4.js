"use strict";
let maxValue = (a, b, c) => {
	return Math.max (a*b*c, a+b+c) + 3;
};
console.log(maxValue(a, b, c));