"use strict";
let point1 = {x: 12, y: 24};
let point2 = {x: 33, y: 45};

let getDistance = (point1, point2) => {
	let diffX = point1.x - point2.x;
	let diffY = point2.y - point2.y;
	return Math.sqrt((diffX * diffX) + (diffY * diffY));
}

console.log (getDistance(point1, point2));