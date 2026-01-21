import promptSync from 'prompt-sync';
const prompt = promptSync();


// Write your code here
// Guidance:
// Step 1: prompt the user to enter a year
// Step 2: convert the user input to a number so we can perform calculations
// Step 3: Implement the logic

//Task 1 Mareh 
let userInput = prompt('Enter the year: ');
let year = Number(userInput);

if (isNaN(year) || year < 1 || year > 9999) {
    console.log('Invalid year!');
} else if ((year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0)) {
    console.log('Yes, ' + year + ' is a leap year');
} else {
    console.log('No, ' + year + ' is not a leap year');
}
