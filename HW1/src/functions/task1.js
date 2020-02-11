"use strict";
let getDay = (number) => {
let days = ["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"];
if (number < 1 || number > days.length) {
	return "Номер дня введен некорректно. Попробуйте число от 1 до 7.";
} else {
	return days[number - 1];
}  
};
console.log(getDay(number));