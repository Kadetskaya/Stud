"use strict";
let max = (array) => {
	if (Array.isArray(array)) {
		let max = array[0];
		for (let i = 1; i < array.length; i++) {
			if (array[i] > max) max = array[i];
		}
		return max;
	}
	return `${array} не является массивом`;
};
console.log(max([2, 4, 98, 67, -59, 6, 345, -9, 115]));