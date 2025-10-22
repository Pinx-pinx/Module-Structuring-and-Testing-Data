const penceString = "399p";

const penceStringWithoutTrailingP = penceString.substring(0,penceString.length - 1);

const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");

const pounds = paddedPenceNumberString.substring(
  0,
  paddedPenceNumberString.length - 2
);

const pence = paddedPenceNumberString
.substring(paddedPenceNumberString.length - 2)
.padEnd(2, "0");

console.log(`£${pounds}.${pence}`);

// This program takes a string representing a price in pence
// The program then builds up a string representing the price in pounds

// You need to do a step-by-step breakdown of each line in this program
// Try and describe the purpose / rationale behind each step

// To begin, we can start with
// 1. const penceString = "399p": initialises a string variable with the value "399p"
// 2. const penceStringWithoutTrailingP = penceString.substring(0,penceString.length - 1): Removes the character "p" from the string, leaving only the "399" as he numeric part which would be the value of the variable penceStringWithoutTrailingP
// 3. const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0"): Ensures the string has 3 characters by adding "0" padding at the start if it's too short.
// 4. const pounds = paddedPenceNumberString.substring(0,paddedPenceNumberString.length - 2): Takes everything except the last two characters that would be the pound amount.
// 5. const pence = paddedPenceNumberString.substring(paddedPenceNumberString.length - 2).padEnd(2, "0"): Takes the last two digits as the pence amount and pads the end with "0" if it's shorter than two digits.
// 6. console.log(`£${pounds}.${pence}`): Prints out the formatted price of pounds and pence.