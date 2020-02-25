"use strict";
function reverseArray(array) {
    if (Array.isArray(array)) {
        let temp;
        for (let i = 0, j = array.length - 1; i < j; i++, j--) {
            temp = array[j];
            array[j] = array[i];
            array[i] = temp;
        }
        return array;
    }
    return `${array} не является массивом`;
}
console.log(reverseArray([2, 4, 98, 67, -59, 6, 345, -9, 115]));