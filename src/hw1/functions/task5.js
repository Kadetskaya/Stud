"use strict";
let ones2 = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
let tens2 = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
let teens2 = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

let convert_billions2 = (num) => {
  if (num >= 1000000000) {
    return convert_hundreds2(Math.floor(num / 1000000000)) + " billion " + convert_millions2(num % 1000000000);
  } else {
    return convert_millions2(num);
  }
};

let convert_millions2 = (num) => {
  if (num >= 1000000) {
    return convert_hundreds2(Math.floor(num / 1000000)) + " million " + convert_thousands2(num % 1000000);
  } else {
    return convert_thousands2(num);
  }
};

let convert_thousands2 = (num) => {
  if (num >= 1000) {
    return convert_hundreds2(Math.floor(num / 1000)) + " thousand " + convert_hundreds2(num % 1000);
  } else {
    return convert_hundreds2(num);
  }
};

let convert_hundreds2 = (num) => {
  if (num > 99) {
    return ones2[Math.floor(num / 100)] + " hundred " + convert_tens2(num % 100);
  } else {
    return convert_tens2(num);
  }
};

let convert_tens2 = (num) => {
  if (num < 10) return ones2[num];
  else if (num >= 10 && num < 20) return teens2[num - 10];
  else {
    return tens2[Math.floor(num / 10)] + " " + ones2[num % 10];
  }
};

let convertToLetters2 = (num) => {
  if (num == 0) return "zero";
  if (num < 0 || num > 999999999999) return "The number is not in the specified range.";
  else return convert_billions2(num);
};

console.log(convertToLetters2(5423000));