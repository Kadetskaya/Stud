"use strict";
let mirror = (number) => {
    if (typeof number !== "number") {
        return "Введите число"
    }
    let result = 0;
    while (number) {
        result *= 10;
        result += number % 10;
        number = Math.floor(number / 10);
    }
    return result;
};
console.log(mirror(123));