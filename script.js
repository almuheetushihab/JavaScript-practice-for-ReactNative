// console.log("I' am JavaScript!");
// console.log("I' am Second javaScript Aleart");
// [1, 2, 3, 4, 5, 6].forEach(console.log);

// Variable

// // JavaScript Variables can be declared in 4 ways:

// // Automatically
// // Using var
// // Using let
// // Using const

// var x = 5;
// var y = 6;
// var z = x + y;
// console.log(z);

// // let user = 'John', age = 25, message = 'Hello'

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

// // Uppercase constants

// const COLOR_RED = "#F00";
// const COLOR_GREEN = "#0F0";
// const COLOR_BLUE = "#00F";
// const COLOR_ORANGE = "#FF7F00";

// let color = COLOR_BLUE;
// console.log(color); // #00F



// // Data types

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

// // let str = "Hello";
// let str2 = 'Single quotes are ok too';
// let phrase = `can embed another ${str}`;
// console.log(str); 
// console.log(str2);


// let name = "John";

// console.log( `Hello, ${name}!` ); 

// console.log( `the result is ${1 + 2}` ); 


// let isGreater = 4 > 1;

// console.log( isGreater );

// // prompt

// let age = prompt('How old are you?', 100);

// console.log(`You are ${age} years old!`);

// let test = prompt("Test", '');
// console.log(`Test is ${test}`);

// // confirm
// let isBoss = confirm("Are you the boss?");

// console.log(isBoss);

// // String Conversion
// let value = 123;
// console.log(typeof value);
// value = String(value);
// console.log(typeof value);

// // Numeric Conversion
// value = 123;
// console.log(typeof value);
// value = Number(value);
// console.log(typeof value);

// let str = "123";
// console.log(typeof str);
// str = Number(str);
// console.log(typeof str);

// let stringNumber = "6";
// let stringText = 3;

// stringNumberAnswer = stringNumber + stringText;
// typeof stringNumberAnswer; // "string"
// console.log(stringNumberAnswer); // "63"

// // TypeOf
// console.log(typeof 0); // "number"
// console.log(typeof 10n); // "bigint"
// console.log(typeof true); // "boolean"
// console.log(typeof "foo"); // "string"
// console.log(typeof Symbol("id")); // "symbol"
// console.log(typeof Math); // "object"
// console.log(typeof null); // "object" (this is a known bug in JavaScript)
// console.log(typeof undefined); // "undefined"
// console.log(typeof alert); // "function" (alert is a function)


// // Basic Operators, maths
// let a = 1, b = 3;
// let c = a + b;
// console.log(c); // 4
// let d = b - a;
// console.log(d); // 2
// let e = a * b;
// console.log(e); // 3
// let f = b / a;
// console.log(f); // 3
// let g = b % a;
// console.log(g); // 0 (remainder of division)
// let h = b ** a;
// console.log(h); // 3 (b raised to the power of a, 3^1 = 3)
// let i = 2;
// i += 3; // equivalent to i = i + 3
// console.log(i); // 5
// let j = 5;
// j -= 2; // equivalent to j = j - 2
// console.log(j); // 3
// let k = 4;
// k *= 2; // equivalent to k = k * 2
// console.log(k); // 8
// let l = 8;
// l /= 2; // equivalent to l = l / 2
// console.log(l); // 4
// let m = 5;
// m %= 2; // equivalent to m = m % 2
// console.log(m); // 1 (remainder of division)
// let n = 2;
// n **= 3; // equivalent to n = n ** 3
// console.log(n); // 8 (2 raised to the power of 3, 2^3 = 8)
// // Increment and Decrement
// let o = 1;
// o++;
// console.log(o); // 2
// o--;
// console.log(o); // 1
// let p = 5;
// console.log(++p); // 6 (pre-increment, p is incremented before being logged)
// console.log(p++); // 6 (post-increment, p is logged before being incremented)
// console.log(p); // 7 (p is now incremented)

// // Terms: “unary”, “binary”, “operand”
// // Unary operators operate on a single operand, while binary operators operate on two operands.
// // An operand is a value that an operator operates on. For example, in the expression `a + b`, `a` and `b` are operands, and `+` is the binary operator.
// // Unary operators include `++`, `--`, and `typeof`, while binary operators include `+`, `-`, `*`, `/`, `%`, and `**`.
// // Comparison Operators
// let x = 5, y = 3;
// console.log(x > y); // true (greater than)
// console.log(x < y); // false (less than)
// console.log(x >= y); // true (greater than or equal to)
// console.log(x <= y); // false (less than or equal to)
// console.log(x == y); // false (equal to)
// console.log(x != y); // true (not equal to)
// console.log(x === y); // false (strict equality, checks value and type)
// console.log(x !== y); // true (strict inequality, checks value and type)
// // Logical Operators
// let a1 = true, b1 = false;
// console.log(a1 && b1); // false (logical AND)
// console.log(a1 || b1); // true (logical OR)
// console.log(!a1); // false (logical NOT, negates the value)
// console.log(!b1); // true (logical NOT, negates the value)
// // Bitwise Operators
// let a2 = 5; // 0101 in binary
// let b2 = 3; // 001 1 in binary
// console.log(a2 & b2); // 1 (bitwise AND, 0101 & 0011 = 0001)
// console.log(a2 | b2); // 7 (bitwise OR, 0101 | 0011 = 0111)
// console.log(a2 ^ b2); // 6 (bitwise XOR, 0101 ^ 0011 = 0110)
// console.log(~a2); // -6 (bitwise NOT, inverts the bits of a2, 0101 becomes 1010, which is -6 in two's complement)
// console.log(a2 << 1); // 10 (left shift, shifts bits to the left, 0101 becomes 1010, which is 10 in decimal)
// console.log(a2 >> 1); // 2 (right shift, shifts bits to the right, 0101 becomes 0010, which is 2 in decimal)
// console.log(a2 >>> 1); // 2 (zero-fill right shift, shifts bits to the right, filling with zeros, 0101 becomes 0010, which is 2 in decimal)
// // Assignment Operators
// let a3 = 10;
// let b3 = 5;
// a3 += b3; // equivalent to a3 = a3 + b3
// console.log(a3); // 15
// a3 -= b3; // equivalent to a3 = a3 - b3
// console.log(a3); // 10
// a3 *= b3; // equivalent to a3 = a3 * b3
// console.log(a3); // 50
// a3 /= b3; // equivalent to a3 = a3 / b3
// console.log(a3); // 10
// a3 %= b3; // equivalent to a3 = a3 % b3
// console.log(a3); // 0
// a3 **= b3; // equivalent to a3 = a3 ** b3
// console.log(a3); // 0 (0 raised to any power is still 0)
// // Conditional (Ternary) Operator
// let age1 = 18;
// let canVote = (age1 >= 18) ? "Yes, you can vote." : "No, you cannot vote.";
// console.log(canVote); // "Yes, you can vote."
// // Comma Operator
// let x1 = (1 + 2, 3 + 4);
// console.log(x1); // 7 (the result of the last expression, 3 + 4, is returned)
// // The comma operator evaluates each of its operands (from left to right) and returns the value of the last operand.
// // It is often used in for loops to execute multiple expressions in the initialization or increment sections.
// // Example of using the comma operator in a for loop
// for (let i = 0, j = 10; i < j; i++, j--) {
//     console.log(`i: ${i}, j: ${j}`);
// }
// // This will log pairs of i and j values until i is no longer less than j.
// // The comma operator can also be used to separate multiple expressions in a single statement.
// let result = (1 + 2, 3 + 4, 5 + 6);
// console.log(result); // 11 (the result of the last expression, 5 + 6, is returned)

// Comparison Operators
// let a4 = 5, b4 = 3;
// console.log(a4 > b4); // true (greater than)
// console.log(a4 < b4); // false (less than)
// console.log(a4 >= b4); // true (greater than or equal to)
// console.log(a4 <= b4); // false (less than or equal to)
// console.log(a4 == b4); // false (equal to)
// console.log(a4 != b4); // true (not equal to)
// console.log(a4 === b4); // false (strict equality, checks value and type)
// console.log(a4 !== b4); // true (strict inequality, checks value and type)

// let year = prompt('In which year was ECMA Script-2025 specification published?', '');

// if (year == 2025) alert( 'You are right!' );

// if (year == 2015) {
//   alert( "That's correct!" );
//   alert( "You're so smart!" );
// }

// Falsy values in JavaScript
// Falsy values are values that evaluate to false in a boolean context.
// let falsyValue1 = 0; // 0 is falsy
// let falsyValue2 = ''; // empty string is falsy
// let falsyValue3 = null; // null is falsy
// let falsyValue4 = undefined; // undefined is falsy
// let falsyValue5 = NaN; // NaN (Not a Number) is falsy
// let falsyValue6 = false; // false is falsy
// // Truthy values in JavaScript
// // Truthy values are values that evaluate to true in a boolean context.
// let truthyValue1 = 1; // non-zero number is truthy
// let truthyValue2 = 'Hello'; // non-empty string is truthy
// let truthyValue3 = {}; // empty object is truthy
// let truthyValue4 = []; // empty array is truthy
// let truthyValue5 = function() {}; // non-null function is truthy
// // Examples of falsy values
// if (falsyValue1) {
//   alert("This won't be shown, because 0 is falsy.");
// }
// if (falsyValue2) {
//   alert("This won't be shown, because an empty string is falsy.");
// }
// if (falsyValue3) {
//   alert("This won't be shown, because null is falsy.");
// }
// if (falsyValue4) {
//   alert("This won't be shown, because undefined is falsy.");
// }
// if (falsyValue5) {
//   alert("This won't be shown, because NaN is falsy.");
// }
// if (falsyValue6) {
//   alert("This won't be shown, because false is falsy.");
// }


// let year = prompt('In which year was the ECMAScript-2015 specification published?', '');

// if (year == 2015) {
//   alert( 'You guessed it right!' );
// } else {
//   alert( 'How can you be so wrong?' );
// }


// let accessAllowed;
// let age = prompt('How old are you?', '');

// if (age > 18) {
//   accessAllowed = true;
// } else {
//   accessAllowed = false;
// }

// alert(accessAllowed);

// The code above prompts the user to guess the year of the ECMAScript-2015 specification.
// If the user enters 2015, it alerts "You guessed it right!".
// If the user enters any other year, it alerts "How can you be so wrong?".
// This is a simple example of using the prompt function to get user input and conditional statements to check the input.
// Note: The prompt function is used to get user input, and the alert function is used to display messages.

// Multiple ‘?’ operator

let age = prompt('age?', 18);

let message = (age < 3) ? 'Hi, baby!' :
  (age < 18) ? 'Hello!' :
  (age < 100) ? 'Greetings!' :
  'What an unusual age!';

alert( message );