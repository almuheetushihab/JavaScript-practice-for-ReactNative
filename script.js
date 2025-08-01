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

console.log( isBoss );

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