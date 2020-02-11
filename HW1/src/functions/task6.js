"use strict";
let numbers = {
	zero: 0, 
	one: 1, 
	two: 2, 
	three: 3, 
	four: 4, 
	five: 5, 
	six: 6, 
	seven: 7, 
	eight: 8, 
	nine: 9,
	ten: 10, 
	eleven: 11, 
	twelve: 12, 
	thirteen: 13, 
	fourteen: 14, 
	fifteen: 15, 
	sixteen: 16, 
	seventeen: 17, 
	eighteen: 18, 
	nineteen: 19,
	twenty: 20, 
	thirty: 30, 
	forty: 40, 
	fifty: 50, 
	sixty: 60, 
	seventy: 70, 
	eighty: 80, 
	ninety: 90
};

let convert_billions = (num) => {	
	let a, b;
	let numArr = num.split(" ");
	for (let i = 0; i < numArr.length; i++) {
		if (numArr[i] == "million") {
			a = numArr.slice(0, numArr.indexOf("billion"));
			b = numArr.slice(numArr.indexOf("billion")+1);
			return convert_hundreds(a.join(" ")) * 1000000000 + convert_millions(b.join(" "));
        }
        return convert_millions(num);
    }
};

let convert_millions = (num) => {	
	let a, b;
	let numArr = num.split(" ");
	for (let i = 0; i < numArr.length; i++) {
		if (numArr[i] == "million") {
			a = numArr.slice(0, numArr.indexOf("million"));
			b = numArr.slice(numArr.indexOf("million")+1);
			return convert_hundreds(a.join(" ")) * 1000000 + convert_thousands(b.join(" "));
        }
        return convert_thousands(num);
    }
};

let convert_thousands = (num) => {	
	let a, b;
	let numArr = num.split(" ");
	for (let i = 0; i < numArr.length; i++) {
		if (numArr[i] == "thousand") {
			a = numArr.slice(0, numArr.indexOf("thousand"));
			b = numArr.slice(numArr.indexOf("thousand")+1);
			return convert_hundreds(a.join(" ")) * 1000 + convert_hundreds(b.join(" "));
        }
        return convert_hundreds(num);
    }
};

let convert_hundreds = (num) => {	
	let a, b;
	let numArr = num.split(" ");
	for (let i = 0; i < numArr.length; i++) {
		if (numArr[i] == "hundred") {
			a = numArr.slice(0, numArr.indexOf("hundred"));
			b = numArr.slice(numArr.indexOf("hundred")+1);
			return convert_tens(a.join(" ")) * 100 + convert_tens(b.join(" "));
        } 
        return convert_tens(num);
    }
};


let convert_tens = (num) => {
	let numArr = num.split(" ");
    let sum = 0;
    for (let i = 0; i < numArr.length; i++) {
    	sum += numbers[numArr[i]];
    }
    return sum;
};

console.log(convert_millions(num));