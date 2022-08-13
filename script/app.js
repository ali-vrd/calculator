const btnNumbers = document.querySelectorAll("#btn-numbers");
const inputs = document.querySelector(".result");
const btnClear = document.querySelector("#btn-clear");
const btnPlus = document.querySelector("#btn-plus");
const btnEquals = document.querySelector("#btn-equals");
const btnT = document.querySelector("#btn-t");
const btnM = document.querySelector("#btn-m");
const btnZ = document.querySelector("#btn-z");
let number1;
let number2;
let results;
let operators = "";

btnClear.addEventListener("click", function (e) {
  inputs.textContent = "0.0";
});

btnPlus.addEventListener("click", function (e) {
  number1 = Number(inputs.textContent);
  inputs.textContent = "0.0";
  operators = "+";
});

btnT.addEventListener("click", function (e) {
  number1 = Number(inputs.textContent);
  inputs.textContent = "0.0";
  operators = "/";
});

btnM.addEventListener("click", function (e) {
  number1 = Number(inputs.textContent);
  inputs.textContent = "0.0";
  operators = "-";
});

btnZ.addEventListener("click", function (e) {
  number1 = Number(inputs.textContent);
  inputs.textContent = "0.0";
  operators = "*";
});

btnEquals.addEventListener("click", function (e) {
  number2 = Number(inputs.textContent);
  switch (operators) {
    case "+":
      results = number1 + number2;
      break;
    case "-":
      results = number1 - number2;
      break;
    case "/":
      results = number1 / number2;
      break;
    case "*":
      results = number1 * number2;
      break;
  }
  inputs.textContent = results;
});

btnNumbers.forEach(function (item) {
  item.addEventListener("click", function (e) {
    const p = document.createElement("p");
    if (inputs.textContent == "0.0") {
      inputs.textContent = e.target.textContent;
    } else {
      inputs.textContent += e.target.textContent;
    }
  });
});
