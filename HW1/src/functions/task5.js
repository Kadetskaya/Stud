"use strict";
let ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
let tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
let teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

let convert_billions = (num) => {
  if (num >= 1000000000) {
    return convert_hundreds(Math.floor(num / 1000000000)) + " billion " + convert_millions(num % 1000000000);
  } else {
    return convert_millions(num);
  }
};

let convert_millions = (num) => {
  if (num >= 1000000) {
    return convert_hundreds(Math.floor(num / 1000000)) + " million " + convert_thousands(num % 1000000);
  } else {
    return convert_thousands(num);
  }
};

let convert_thousands = (num) => {
  if (num >= 1000) {
    return convert_hundreds(Math.floor(num / 1000)) + " thousand " + convert_hundreds(num % 1000);
  } else {
    return convert_hundreds(num);
  }
};

let convert_hundreds = (num) => {
  if (num > 99) {
    return ones[Math.floor(num / 100)] + " hundred " + convert_tens(num % 100);
  } else {
    return convert_tens(num);
  }
};

let convert_tens = (num) => {
  if (num < 10) return ones[num];
  else if (num >= 10 && num < 20) return teens[num - 10];
  else {
    return tens[Math.floor(num / 10)] + " " + ones[num % 10];
  }
};

let convert = (num) => {
  if (num == 0) return "zero";
  if (num < 0 || num > 999999999999) return "The number isn't in the specified range.";
  else return convert_billions(num);
};

console.log(convert(num));