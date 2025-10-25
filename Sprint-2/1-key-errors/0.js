// Predict and explain first...
//  we are expecting the code to return a string with the first character being capitalised.
// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring

function capitalise(str) {
  let str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}

// While calling the function it gave an error "SyntaxError" Identifier 'str' has already been declared " This means that in the code we redeclared a variable name that has been already cleared which is not acceptable in javascript because it cause a naming conflict.
// To fix this we have to change the "let str" into another variable name like " let capitaliseStr" or we can reasign the variable.
// function capitalise(str) {
// let capitaliseStr = `${str[0].toUpperCase()}${str.slice(1)}`;
//return capitaliseStr;}

//console.log(capitaliseStr("hello"))



