"use strict";
let numbers2 = {
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

let convert_billions3 = (num) => {
	let a, b;
	let numArr = num.split(" ");
	for (let i = 0; i < numArr.length; i++) {
	    if (numArr[i] == "minus") {
            return "The number is not in the specified range."
        }
		if (numArr[i] == "billion") {
            a = numArr.slice(0, numArr.indexOf("billion"));
            if (i != numArr.length - 1) {
                b = numArr.slice(numArr.indexOf("billion") + 1);
                return convert_hundreds3(a.join(" ")) * 1000000000 + convert_millions3(b.join(" "));
            }
            return convert_hundreds3(a.join(" ")) * 1000000000;
        }
    }
    return convert_millions3(num);
};

let convert_millions3 = (num) => {
	let a, b;
	let numArr = num.split(" ");
	for (let i = 0; i < numArr.length; i++) {
		if (numArr[i] == "million") {
            a = numArr.slice(0, i);
            if (i != numArr.length - 1) {
                b = numArr.slice(i + 1);
                return convert_hundreds3(a.join(" ")) * 1000000 + convert_thousands3(b.join(" "));
            }
            return convert_hundreds3(a.join(" ")) * 1000000;
        }
    }
    return convert_thousands3(num);
};

let convert_thousands3 = (num) => {
	let a, b;
	let numArr = num.split(" ");
	for (let i = 0; i < numArr.length; i++) {
		if (numArr[i] == "thousand") {
			a = numArr.slice(0, i);
            if (i != numArr.length - 1) {
                b = numArr.slice(i + 1);
                return convert_hundreds3(a.join(" ")) * 1000 + convert_hundreds3(b.join(" "));
            }
            return convert_hundreds3(a.join(" ")) * 1000;
        }
    }
    return convert_hundreds3(num);
};

let convert_hundreds3 = (num) => {
	let a, b;
	let numArr = num.split(" ");
	for (let i = 0; i < numArr.length; i++) {
		if (numArr[i] == "hundred") {
			a = numArr.slice(0, i);
			if (i != numArr.length - 1) {
                b = numArr.slice(i + 1);
                return convert_tens3(a.join(" ")) * 100 + convert_tens3(b.join(" "));
            }
            return convert_tens3(a.join(" ")) * 100;
        }
    }
    return convert_tens3(num);
};


let convert_tens3 = (num) => {
	let numArr = num.split(" ");
    let sum = 0;
    for (let i = 0; i < numArr.length; i++) {
    	sum += numbers2[numArr[i]];
    }
    return sum;
};

let convertToNumbers2 = (num) => {
    let numArr = num.split(" ");
    if (numArr.length > 19) {
        return "The number is not in the specified range.";
    }
    return convert_billions3(num);
};

console.log(convertToNumbers2("zero"));
console.log(convertToNumbers2("one hundred thousand fifty five"));
console.log(convertToNumbers2("minus one hundred thousand fifty five"));
console.log(convertToNumbers2("one million one hundred thousand fifty five"));
console.log(convertToNumbers2("five hundred sixty nine billion one million one hundred thousand fifty five"));
console.log(convertToNumbers2("nine hundred ninety nine trillion nine hundred ninety nine billion nine hundred ninety nine million nine hundred ninety nine thousand nine hundred ninety nine"));