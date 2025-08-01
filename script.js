// console.log("I' am JavaScript!");
// console.log("I' am Second javaScript Aleart");
// [1, 2, 3, 4, 5, 6].forEach(console.log);

// Variable

// JavaScript Variables can be declared in 4 ways:

// Automatically
// Using var
// Using let
// Using const

// var x = 5;
// var y = 6;
// var z = x + y;
// console.log(z);

// let user = 'John', age = 25, message = 'Hello'

// console.log("my user name is", user);

// let messages;
// messages = "Hello!";
// messages = "world!";

// console.log(messages);

// let hello = 'Hello world!';
// let secondMessage = hello;


// console.log(hello);
// console.log(secondMessage);


// const myBirthday = '1st January 2000';

// myBirthday = '2nd January 2000';
// console.log(myBirthday);

// Uppercase constants

// const COLOR_RED = "#F00";
// const COLOR_GREEN = "#0F0";
// const COLOR_BLUE = "#00F";
// const COLOR_ORANGE = "#FF7F00";

// let color = COLOR_BLUE;
// console.log(color); // #00F



// Data types

// let dataMessage = "hello";
// dataMessage = 123456;
// console.log(dataMessage); // 123456

// let number = 123456;
// number = 12.34;
// console.log(number); // 12.34

// console.log(1 / 0);
// console.log(Infinity);
// console.log("not a number" / 2);

// // NaN is sticky. Any further mathematical operation on NaN returns NaN:

// console.log( NaN + 1 );
// console.log( 3 * NaN ); 
// console.log( "not a number" / 2 - 1 );

// let str = "Hello";
// let str2 = 'Single quotes are ok too';
// let phrase = `can embed another ${str}`;
// console.log(str); 
// console.log(str2);


// let name = "John";

// console.log( `Hello, ${name}!` ); 

// console.log( `the result is ${1 + 2}` ); 


// let isGreater = 4 > 1;

// console.log( isGreater );

// prompt

let age = prompt('How old are you?', 100);

console.log(`You are ${age} years old!`);

let test = prompt("Test", '');
console.log(`Test is ${test}`);

// confirm
let isBoss = confirm("Are you the boss?");

console.log(isBoss);

// String Conversion
let value = 123;
console.log(typeof value);
value = String(value);
console.log(typeof value);

// Numeric Conversion
value = 123;
console.log(typeof value);
value = Number(value);
console.log(typeof value);

let str = "123";
console.log(typeof str);
str = Number(str);
console.log(typeof str);

let stringNumber = "6";
let stringText = 3;

stringNumberAnswer = stringNumber + stringText;
typeof stringNumberAnswer; // "string"
console.log(stringNumberAnswer); // "63"

// TypeOf
console.log(typeof 0); // "number"
console.log(typeof 10n); // "bigint"
console.log(typeof true); // "boolean"
console.log(typeof "foo"); // "string"
console.log(typeof Symbol("id")); // "symbol"
console.log(typeof Math); // "object"
console.log(typeof null); // "object" (this is a known bug in JavaScript)
console.log(typeof undefined); // "undefined"
console.log(typeof alert); // "function" (alert is a function)


// Basic Operators, maths
let a = 1, b = 3;
let c = a + b;
console.log(c); // 4
let d = b - a;
console.log(d); // 2
let e = a * b;
console.log(e); // 3
let f = b / a;
console.log(f); // 3
let g = b % a;
console.log(g); // 0 (remainder of division)
let h = b ** a;
console.log(h); // 3 (b raised to the power of a, 3^1 = 3)
let i = 2;
i += 3; // equivalent to i = i + 3
console.log(i); // 5
let j = 5;
j -= 2; // equivalent to j = j - 2
console.log(j); // 3
let k = 4;
k *= 2; // equivalent to k = k * 2
console.log(k); // 8
let l = 8;
l /= 2; // equivalent to l = l / 2
console.log(l); // 4
let m = 5;
m %= 2; // equivalent to m = m % 2
console.log(m); // 1 (remainder of division)
let n = 2;
n **= 3; // equivalent to n = n ** 3
console.log(n); // 8 (2 raised to the power of 3, 2^3 = 8)
// Increment and Decrement
let o = 1;
o++;
console.log(o); // 2
o--;
console.log(o); // 1
let p = 5;
console.log(++p); // 6 (pre-increment, p is incremented before being logged)
console.log(p++); // 6 (post-increment, p is logged before being incremented)
console.log(p); // 7 (p is now incremented)