const cardNumber = 4533787178994213;
const last4Digits = cardNumber.slice(-4);//4213

console.log(last4Digits);

// The last4Digits variable should store the last 4 digits of cardNumber
// However, the code isn't working
// Before running the code, make and explain a prediction about why the code won't work
// Then run the code and see what error it gives.
// Consider: Why does it give this error? Is this what I predicted? If not, what's different?
// Then try updating the expression last4Digits is assigned to, in order to get the correct value

//Answer: 
// the code will not work because the method .slice is an array that works only for strings and the variable cardNumber's value is not a string.
// to fix this we can turn the numbers into string by putting double quotes "4533787178994213" the the code will work 
// or we can convert the number into string by using toString() method.
//const last4Digits = cardNumber.tostring().slice(-4);//4213
