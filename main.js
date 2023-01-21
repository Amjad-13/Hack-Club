// Get Elementns
let firstNum = document.getElementById("firstNum");
let endNum = document.getElementById("endNum");
let btn = document.getElementsByClassName("do")[0];
let resetbtn = document.querySelector(`form > input[type="reset"]`);
let output = document.getElementById("output");
output.innerHTML = `Output: 0`;
// Variables
let firstOutput = 1, secondOutput = 0;
// Sum the output
btn.addEventListener("click", () => {
  // Get Input numbers
  firstOutput = +firstNum.value;
  secondOutput = +endNum.value;
  // Calculate the fnial result
  output.innerHTML = `Output: ${(firstOutput + secondOutput) * (secondOutput - firstOutput + 1) / 2}`; // Sum
})

// Reset Output Value
resetbtn.addEventListener("click", () => {
  output.innerHTML = `Output: 0`;
})
// Reset Submit Function
document.forms[0].addEventListener("submit", () => e.preventDefault());