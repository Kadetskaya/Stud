"use strict";
let minIndex = (array) => {
	if (Array.isArray(array)) {
		let minIndex = array[0];
		for (let i = 1; i < array.length; i++) {
			if (array[i] < minIndex) minIndex = array[i];
		}
		return array.indexOf(minIndex);
	}
	return `${array} не является массивом`;
};
console.log(minIndex([2, 4, 98, 67, -59, 6, 345, -9, 115]));