"use strict";
let array = [1, 2, 3, 4];
let mid = array.length / 2;
for (let i = 0; i < mid; i++) {
	let part1 = array[i];
	array [i] = array[i + mid];
	array[i + mid] = part1;
};
console.log(array);