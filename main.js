// Get Elementns
let input = document.getElementById("inputNum");
let btn = document.getElementsByClassName("do")[0];
let resetbtn = document.querySelector(`form > input[type="reset"]`);
let output = document.getElementById("output");
output.innerHTML = `Output: 0`;
// Variables
let startNum = 1, endNum;
// Reset Output Value
resetbtn.addEventListener("click", () => {
  output.innerHTML = `Output: 0`;
})
// Function that gets the value of the input => End Number
input.addEventListener("focusout", () => {
  input.value > 1000 ?
  input.value = 0 :
  endNum = input.value;
})
// Sum the output
btn.addEventListener("click", () => {
  // Declare temporary variables
  let i = startNum, result = 0;
  // Loop
  while (i <= endNum) {
    result += i;
    i++;
    output.innerHTML = `Output: ${result}`; // Sum
  }
})
