"use strict";
let ones = ['', 'один', 'два', 'три', 'четыре', 'пять', 'шесть', 'семь', 'восемь', 'девять'];
let tens = ['', '', 'двадцать', 'тридцать', 'сорок', 'пятьдесят', 'шестьдесят', 'семьдесят', 'восемьдесят', 'девяносто'];
let teens = ['десять', 'одинадцать', 'двенадцать', 'тринадцать', 'четырнадцать', 'пятнадцать', 'шестнадцать', 'семнадцать', 'восемнадцать', 'девятнадцать'];
let hundreds = ['', 'сто', 'двести', 'триста', 'четыреста', 'пятьсот', 'шестьсот', 'семьсот', 'восемьсот', 'девятьсот'];

let convert_hundreds = (num) => {
  if (num > 99) {
    return hundreds[Math.floor(num / 100)] + " " + convert_tens(num % 100);
  } else {
    return convert_tens(num);
  }
};

let convert_tens = (num) => {
  if (num < 10) {
  	return ones[num];
  } else if (num >= 10 && num < 20) {
  	return teens[num - 10];
  } else {
    return tens[Math.floor(num / 10)] + " " + ones[num % 10];
  }
};

let convert = (num) => {
  if (num == 0) return "ноль";
  if (num < 0 || num > 999) return "Число не входит в заданный диапазон 0-999.";
  else return convert_hundreds(num);
};

console.log(convert(num));