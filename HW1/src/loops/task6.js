"use strict";
let number = 123;
let result = 0;
while (number) {
	result *= 10;
    result += number % 10;
    number = Math.floor(number / 10);
};
console.log(result);