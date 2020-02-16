"use strict";
let sum2 = (array) => {
	if (Array.isArray(array)) {
		let sum = 0;
		for (let i = 0; i < array.length; i++) {
			if (i % 2 != 0)
				sum += array[i];
		}
		return sum;
	}
	return `${array} не является массивом`;
};
console.log(sum2([2, 4, 98, 67, -59, 6, 345, -9, 115]));