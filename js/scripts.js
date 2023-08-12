// business logic
function add(number1, number2) {
  return number1 + number2;
}

function subtract(number1, number2) {
  return number1 - number2;
}

function multiply (number1, number2) {
  return number1 * number2;
}

function divide (number1, number2) {
  return number1 / number2;
}

function remainder (number1, number2) {
  return number1 % number2;
}


// user interface logic 
const number1 = parseInt(prompt("Enter a number:"));
const number2 = parseInt(prompt("Enter another number:"));

// window.alert("when you add " + number1 + " and " + number2 + " the result is " + add(number1, number2) + " or " + number1 + " + " + number2 + " = " + add(number1, number2));
// window.alert("when you subtract " + number2 + " from " + number1 + " the result is " + subtract(number1, number2));
// window.alert("when you multiply " + number1 + " by " + number2 + " the result is " + multiply(number1, number2)); 
// window.alert("when you divide " + number1 + " by " + number2 + " the result is " + divide(number1, number2)); 
// window.alert("the remainder from dividing " + number1 + " by " + number2 + " is " + remainder(number1, number2));

window.alert( number1 + " + " + number2 + " = " + add(number1, number2) + "\n"
+ number1 + " - " + number2 + " = " + subtract(number1, number2) + "\n"
+ number1 + " * " + number2 + " = " + multiply(number1, number2) + "\n"
+ number1 + " / " + number2 + " = " + divide(number1, number2) + "\n" 
+ " and the remainder from " + number1 + " divided by " + number2 + " is " + remainder(number1, number2));

window.onload = function random() {
  let button = document.querySelector("button");
  button.onclick = function() {
    window.scrollTo({
      top: 0,
      left: 1300,
      behavior: "smooth"
    })
  }
  let body = document.querySelector("body"); 
  let randomNumber = Math.floor(Math.random() * 10);
  window.alert(" and here is a random number between 1 and 10:  " + randomNumber);
  if (randomNumber <1) {
    body.style.backgroundColor = "white";
    body.style.color = "black";
  } 
  else if (randomNumber <2) {
    body.style.backgroundColor = "red";
    body.style.color = "blue";

  }
  else if (randomNumber <3) {
    body.style.backgroundColor = "lightblue";
    body.style.color = "red";
  }
  else if (randomNumber <4) {
    body.style.backgroundColor = "violet";
    body.style.color = "green";
  }
  else if (randomNumber <5) {
    body.style.backgroundColor = "orange";
    body.style.color = "purple"; 
  }
  else if (randomNumber <6) {
    body.style.backgroundColor = "lightgreen";
    body.style.color = "black";
  }
  else if (randomNumber <7) {
    body.style.backgroundColor = "darkblue";
    body.style.color = "yellow";
  }
  else if (randomNumber <8) {
    body.style.backgroundColor = "lightyellow";
    body.style.color = "black";
  }
  else if (randomNumber <9) {
    body.style.backgroundColor = "black";
    body.style.color = "white";
  }
  else {
    body.style.backgroundColor = "lightgrey";
    body.style.color = "orange";
  } 
}
