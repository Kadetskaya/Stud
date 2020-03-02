"use strict";
let numbersArr = document.getElementsByClassName("number");
let operatorsArr = document.getElementsByClassName("operator");

let del = document.getElementById("del");
let equal = document.getElementById("equal");
let display = document.getElementById("display");
let point = document.getElementById("decimal");

let val1 = "";
let val2 = "";

let isOperatorClicked = false;
let operator = "";
let isPoint = true;

function numberClicked (event) {
    display.value = "0";
    let number = event.target.value;
    if (!isOperatorClicked) {
        val1 += number;
        display.value = val1;
    }
    if (isOperatorClicked) {
        val2 += number;
        display.value = val2;
    }
};

function calculation(event) {
    operator = event.target.value;
    isOperatorClicked = true;
    isPoint = true;
};

function add (val1, val2) {
    return val1 + val2;
};

function subtract (val1, val2) {
    return val1 - val2;
};

function multiply (val1, val2) {
    return val1 * val2;
};

function divide (val1, val2) {
    if (val2 === 0) {
        let error = "Error";
        return error;
    }
    return val1 / val2;
};

function calc (event) {
    let result = "";
    switch (operator) {
        case("+"):
            result = add(parseFloat(val1), parseFloat(val2));
            display.value = result.toString();
            break;
        case("-"):
            result = subtract(parseFloat(val1), parseFloat(val2));
            display.value = result.toString();
            break;
        case("x"):
            result = multiply(parseFloat(val1), parseFloat(val2));
            display.value = result.toString();
            break;
        case("/"):
            result = divide(parseFloat(val1), parseFloat(val2));
            display.value = result.toString();
            break;
    }
    val1 = result;
    val2 = "";
    isOperatorClicked = false;
};

function clear (event) {
    val1="";
    val2="";
    display.value = "0";
    isPoint = true;
    isOperatorClicked = false;
};

function decimal (event) {
    if (isPoint) {
        display.value += ".";
        isPoint = false;
    }
};

for (let i = 0; i < numbersArr.length; i++) {
    numbersArr[i].addEventListener("click", numberClicked);
};

for (let i = 0; i < operatorsArr.length; i++) {
    operatorsArr[i].addEventListener("click", calculation);
};

equal.addEventListener("click", calc);
del.addEventListener("click", clear);
point.addEventListener("click", decimal);
