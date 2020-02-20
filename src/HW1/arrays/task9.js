"use strict";
// Bubble

let array = [2, 4, 98, 67, -59, 6, 345, -9, 115];
const bubbleSort = array => {
    for (let i = 0, endI = array.length - 1; i < endI; i++) {
        let wasSwap = false;
        for (let j = 0, endJ = endI - i; j < endJ; j++) {
            if (array[j] > array[j + 1]) {
                [array[j], array[j + 1]] = [array[j + 1], array[j]];
                wasSwap = true;
            }
        }
        if (!wasSwap) break;
    }
    return array;
};
console.log(bubbleSort(array));




// Select


let array = [2, 4, 98, 67, -59, 6, 345, -9, 115];
const selectionSort = array => {
    for (let i = 0; i < array.length - 1; i++) {
        let indexMin = i;
        for (let j = i + 1; j < array.length; j++) {
            if (array[indexMin] > array[j]) {
                indexMin = j;
            }
        }
        if (indexMin != i) {
            [array[i], array[indexMin]] = [array[indexMin], array[i]];
        }
    }
    return array;
};
console.log(selectionSort(array));




// Insert

let array = [2, 4, 98, 67, -59, 6, 345, -9, 115];
const insertionSort = array => {
    for (let i = 1; i < array.length; i++) {
        let current = array[i];
        let j = i;
        while (j > 0 && array[j - 1] > current) {
            array[j] = array[j - 1];
            j--;
        }
        array[j] = current;
    }
    return array;
};
console.log(insertionSort(array)); 