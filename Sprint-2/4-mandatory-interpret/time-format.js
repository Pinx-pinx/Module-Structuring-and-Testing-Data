function pad(num) {
  return num.toString().padStart(2, "0");
}

function formatTimeDisplay(seconds) {
  const remainingSeconds = seconds % 60;
  const totalMinutes = (seconds - remainingSeconds) / 60;
  const remainingMinutes = totalMinutes % 60;
  const totalHours = (totalMinutes - remainingMinutes) / 60;

  return `${pad(totalHours)}:${pad(remainingMinutes)}:${pad(remainingSeconds)}`;
}
console.log(formatTimeDisplay(61));

// You will need to play computer with this example - use the Python Visualiser https://pythontutor.com/visualize.html#mode=edit
// to help you answer these questions

// Questions

// a) When formatTimeDisplay is called how many times will pad be called?
// Answer :3 times

// Call formatTimeDisplay with an input of 61, now answer the following:

// b) What is the value assigned to num when pad is called for the first time?
// Answer: num = 0

// c) What is the return value of pad is called for the first time?
// Answer: 00

// d) What is the value assigned to num when pad is called for the last time in this program?  Explain your answer
//Answer : return value0 =1
// Explanation: num = 1 when pad is called for the last time because this corresponds to remainingSeconds. 
// Since num is a number, num.toString() converts it to the string "1". 
// Then, .padStart(2, "0") ensures the string is at least 2 characters long, so a "0" is added before "1", giving "01".
// e) What is the return value assigned to num when pad is called for the last time in this program?  Explain your answer
//Answer: return value01
//Explanation: The pad function always returns a string of at least 2 characters. Since the last call’s num was 1, it becomes "01" after padding.