"use strict";
let quantity = (array) => {
	if (Array.isArray(array)) {
		let counter = 0;
		for (let i = 0; i < array.length; i++) {
			if (array[i] % 2 != 0)
				counter++;
		}
		return `Количество нечетных элементов массива: ${counter}.`;
	}
	return `${array} не является массивом`;
};
console.log(quantity([2, 4, 98, 67, -59, 6, 345, -9, 115]));