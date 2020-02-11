"use strict";
let mark = (score) => {
	if (score < 0 || score > 100) {
		return "Score is out of range.";
	}
	if (score < 20) {
		return "F";
	}
	if (score < 40) {
		return "E";
	}
	if (score < 60) {
		return "D";
	}
	if (score < 75) {
		return "C";
	}
	if (score < 90) {
		return "B";
	} 
	if (score <= 100) {
		return "A";
    }
};
console.log(mark(score));