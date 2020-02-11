"use strict";
let array = [2, 4, 98, 67, -59, 6, 345, -9, 115];
let counter = 0;
for (let i = 0; i < array.length; i++) {
	if (array[i] % 2 != 0) 
		counter++;
}
console.log("Количество нечетных элементов массива: " + counter);