//последовательный подбор

let squareRoot1 = (number) => {
	for (let i = 1; ; i++ ) {
        if (i * i == number) {
        	return i;
        }
        if (i * i > number) {
        	return i-1;
        }
    }
};
console.log(squareRoot1(number));


 //метод бинарного поиска

let squareRoot2 = (number) => {
	if (number == 0 || number == 1)  
       return number;
	let min = 0;
	let max = number;
    while (min <= max) {
    	let mid = Math.floor((min + max) / 2);
    	if (mid * mid == number) {
    		return mid;
    	}
    	if (mid * mid < number) {
    		min = mid + 1;
    		res = mid;
    } else {
    	max = mid - 1;
    }
    }    
    return max;
};
console.log(squareRoot2(number));