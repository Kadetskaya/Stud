"use strict";
let maxIndex = (array) => {
	if (Array.isArray(array)) {
		let maxIndex = array[0];
		for (let i = 1; i < array.length; i++) {
			if (array[i] > maxIndex) maxIndex = array[i];
		}
		return array.indexOf(maxIndex);
	}
	return `${array} не является массивом`;
};
console.log(maxIndex([2, 4, 98, 67, -59, 6, 345, -9, 115]));