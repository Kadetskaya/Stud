"use strict";
let array = [2, 4, 98, 67, -59, 6, 345, -9, 115];
let min = array[0];
for (let i = 1; i < array.length; i++) {
    if (array[i] < min) min = array[i];
}
console.log(min); 