"use strict";
let numbersArr = document.getElementsByClassName("number");
let operatorsArr = document.getElementsByClassName("operator");

let del = document.getElementById("del");
let equal = document.getElementById("equal");
let display = document.getElementById("display");
//console.log(display);
//display.value = 348;
let val1 = "";
let val2 = "";

let isOperatorClicked = false;
let operator = "";
let isPoint = true;

for (let i = 0; i < numbersArr.length; i++) {
    numbersArr[i].addEventListener("click", numberClicked);
};

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


for (let i = 0; i < operatorsArr.length; i++) {
    operatorsArr[i].addEventListener("click", calculation);
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

equal.addEventListener("click", calc);

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

del.addEventListener("click", clear);

function clear (event) {
    val1="";
    val2="";
    display.value = "0";
    isPoint = true;
    isOperatorClicked = false;
};

let point = document.getElementById("decimal");
point.addEventListener("click", decimal);

function decimal (event) {
    if (isPoint) {
        display.value += ".";
        isPoint = false;
    }
}


