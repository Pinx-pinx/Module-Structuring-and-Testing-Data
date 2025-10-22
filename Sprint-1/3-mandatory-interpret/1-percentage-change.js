let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",",""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",",""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made
// answer: There are 4 function calls in total. (2 function calls in line 4 and 2 function calls in line 5)
//  1. Number(carPrice.replaceAll(",", "");
//  2. (carPrice.replaceAll(",", ""));
//  3. Number(priceAfterOneYear.replaceAll("," "");
//  4. (priceAfterOneYear.replaceAll("," ""))
//  

// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?
// answer: The line 5 has an error. 
// Its missing a comma in the expression (priceAfterOneYear.replaceAll("," ""));
// To fix this, we have to put a comma between the 2 quotation marks(priceAfterOneYear.replaceAll(",",""));

// c) Identify all the lines that are variable reassignment statements
//answer: Line 4 and 5 are variable reasssignment statements
// 1. carPrice = Number(carPrice.replaceAll(",", ""));
// 2. priceAfterOneYear = Number(priceAfterOneYear.replaceAll("," ""));


// d) Identify all the lines that are variable declarations
//answer: Line 1,2,7 and 8 are variable declarations
// 1. let carPrice = "10,000";
// 2. let priceAfterOneYear = "8,543";
// 3. const priceDifference = carPrice - priceAfterOneYear;
// 4. const percentageChange = (priceDifference / carPrice) * 100;


// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?
// answer: So the first thing that happens here is that this function (carPrice.replaceAll(",","") will remove the comma in the string ("10,000") and replace it with a string(10000")
// and the the function Number(carPrice.replaceAll(",","")) will change the string("10000")into a number which is (10000) because if it the string("10000")will not be converted into a number then the result will return you NaN.