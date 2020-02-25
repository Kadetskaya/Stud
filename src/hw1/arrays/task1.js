"use strict";
let min = (array) => {
    if (Array.isArray(array)) {
        let min = array[0];
        for (let i = 1; i < array.length; i++) {
            if (array[i] < min) min = array[i];
        }
        return min;
    }
    return `${array} не является массивом`;
};
console.log(min([2, 4, 98, 67, -59, 6, 345, -9, 115]));