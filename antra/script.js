"use strict";
const div = document.createElement("div");
document.body.appendChild(div);
console.log(div);
const input1 = document.createElement("input");
input1.type = "number";
input1.placeholder = "ul list";
const input2 = document.createElement("input");
input2.placeholder = "ol list ";
input2.type = "number";
const button = document.createElement("button");
button.innerText = "Create List";
button.style.color = "white";
button.style.backgroundColor = "green";
div.append(input1, input2, button);

button.addEventListener("click", (event) => {
  event.preventDefault();
  const valueUL = input1.value;
  const valueOL = input2.value;

  const listCheck = document.querySelectorAll("ul");
  listCheck.forEach();
  valueOL = "";
  valueUL = "";
});
