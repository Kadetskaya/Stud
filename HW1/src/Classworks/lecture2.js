let test1 = {
    tasks: 6,
    complication: 'high',
    time: null
};
let result1 = typeof(test1);
console.log('Тип переменной', result1);

//////////////////////////////////////////////////////////////////////////

let test2 = [5, 10, 'five', 23];
let result2 = typeof(test2);
let result3 = Array.isArray([5, 10, 'five', 23]);
console.log('Тип переменной', result2);
console.log('Массив ли это', result3);

//////////////////////////////////////////////////////////////////////////
// Numbers

console.log(10);
console.log(0xfffcc);
console.log(1.24e4);

console.log(0 / 0);

/////////////////////////////

let newNumber = new Number(400.5698);
let result4 = newNumber.toFixed(2);
console.log(result4);

/////////////////////////////////////////////////////////////////////////

let count1 = 8;
console.log(++count1);
console.log(count1);

////////////////////////////////////////////////////////////////////////

let count2 = 5;
console.log(count2++);
console.log(count2);

///////////////////////////////////////////////////////////////////////////

let result5 = 10 / 3;
console.log('Результат деления', result5);

let result6 = 10%3;
console.log('Остаток от деления', result6);

////////////////////////////////////////////////////////////////////////////

console.log(61 > 196);
console.log(200 >= 200);
console.log(200 !== 200);

////////////////////////////////////////////////////////////////////////////

let sum = 65 + 97;
console.log(`Сумма положительных чисел: ${sum}!`);

////////////////////////////////////////////////////////////////////////////

let guestList = "Guests:\n - John\n - Pete\n - Mary";
console.log(guestList);

///////////////////////////////////////////////////////////////////////////

let x = 156;
let y = !!x;
let z = !y;
console.log(y);
console.log(z);

/////////////////////////////////////////////////////////////////////////////

const a = 3;
const b = -2;
console.log(a > 0 && b > 0);
console.log(a > 0 || b > 0);
console.log(!(a > 0 || b > 0));