"use strict";
let maxValue = function (a, b, c) {
	if (a*b*c > a+b+c) {
		return a*b*c+3;
	} else if (a*b*c < a+b+c) {
		return a+b+c+3;
	} else if (a*b*c === a+b+c) {
		return a+b+c+3;
	}
};
console.log(maxValue(3, 5, 6));