"use strict";
let isPrime = (number) => {
	if (number < 2) {
		return "Число должно быть больше 1.";
	} else if (number == 2) {
		return number + " - простое число."};
		for (let i = 2; i <= Math.round(Math.sqrt(number)); i++) { 
			if (number % i == 0) {
				return number + " - составное число.";
			}
			return number + " - простое число.";
	}
};
console.log(isPrime(23));