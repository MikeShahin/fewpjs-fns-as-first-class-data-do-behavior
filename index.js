/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(string) {
  let time = string.split(":");
  let hour = parseInt(time[0]);

  if (hour < 12) return "Good Morning"
  if (hour > 17) return "Good Evening"
  return "Good Afternoon"
}

/* Write your implementation of displayMessage() */
let h1 = document.getElementById("greeting");

function displayMessage(greeting) {
    h1.innerText = greeting
}