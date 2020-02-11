"use strict";
let whichQuarter = (x, y) => {
	if (x == 0 && y == 0) {
		return "Точка находится в начале координат.";
	} else if (x == 0) {
		return "Точка находится на оси 'x'.";
	} else if (y == 0) {
		return "Точка находится на оси 'y'.";
	} else if (x > 0) {
		if (y > 0) {
			return "Точка находится в I четверти.";
		} else if (y < 0) {
			return "Точка находится в IV четверти.";
		}
	} else if (x < 0) {
		if (y > 0) {
			return "Точка находится в II четверти.";
		} else if (y < 0) {
			return "Точка находится в III четверти.";
		}
	}
};
console.log(whichQuarter(5, 15));
