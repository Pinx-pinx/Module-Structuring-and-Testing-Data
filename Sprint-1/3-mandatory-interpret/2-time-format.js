const movieLength = 8784; // length of movie in seconds

const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(result);

// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program?
//answer: There are total of 6 declarations(line 1,3,4,6,7,9,)
// 1. const movieLength = 8784; // length of movie in seconds
// 2. const remainingSeconds = movieLength % 60;
// 3. const totalMinutes = (movieLength - remainingSeconds) / 60;
// 4. const remainingMinutes = totalMinutes % 60;
// 5. const totalHours = (totalMinutes - remainingMinutes) / 60;
// 6. const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;

// b) How many function calls are there?
// answer: Ther is 1 function call in the code which is the console.log

// c) Using documentation, explain what the expression movieLength % 60 represents
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators
//answer: the expression movieLength % 60 used a modulus operator %
// This % will give the remainder of the division operation.
//In this line movieLenghth is (8784). when we divide this to 60 it will give us 146.4.
// Multiply 146 to 60 it will give us 8760.
// Then if we substract this 8760 from 8784 it will give us 24 as the remaining seconds
//so the expression movieLength % 60 represents the remaining seconds.
// d) Interpret line 4, what does the expression assigned to totalMinutes mean?
// Answer: totalMinutes would be the result of calculatuing the (movieLength - remainingSeconds) / 60;
// In here movielength which is(8784) is substracting the remaining seconds (24) which we calculated in line 3.
// (8784 -24) will give us 8760 which we will devide by 60(60 is the seconds in a minute) will give us 146 minutes
//so the final result which is 24 minutes will assign to totalMinutes which represents the total minutes from the movieLength
// e) What do you think the variable result represents? Can you think of a better name for this variable?
// Answer:  The variable result represents the total time duration of the movie.
//movieDuration would be the better name of this varible.
// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer
// Answer: I tried experimenting with different values like negative number, decimal number and even 0 and it did not break the code.
// 1. Integers will work perfectly and return you a meaningful result.
// 2. negative numbers will work but it will also gve you a negative result which is not acceptable for time calculation as it will return you a meaning lesst result.
// 3. Decimal number works fine as well but not also acceptable in time calculation as it will not give a precise floating point numbers.
// 4. 0 will work but will always return a 0 so its not also acceptable  for time calculation because it will return a meaningless result
