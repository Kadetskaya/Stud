"use strict";
let array = [1, 2, 3, 4];
function halfReverse (array) {
	if (Array.isArray(array)) {
		let mid = array.length / 2;
		for (let i = 0; i < mid; i++) {
			let part1 = array[i];
			array [i] = array[i + mid];
			array[i + mid] = part1;
		}
		return array;
	}
	return `${array} не является массивом`;
}
console.log(halfReverse(array));