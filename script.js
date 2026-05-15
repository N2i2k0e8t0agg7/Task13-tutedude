// Even or Odd Checker Program
// This program checks whether numbers are even or odd
// using the modulo (%) operator and if-else statements.

// Predefined variables
let number1 = 5;
let number2 = 10;
let number3 = 7;
let number4 = 12;

// Function to check even or odd
function checkEvenOrOdd(number) {

    // If remainder is 0, number is even
    if (number % 2 === 0) {
        console.log(`The number ${number} is even.`);
    }

    // Otherwise, number is odd
    else {
        console.log(`The number ${number} is odd.`);
    }
}

// Checking all numbers
checkEvenOrOdd(number1);
checkEvenOrOdd(number2);
checkEvenOrOdd(number3);
checkEvenOrOdd(number4);