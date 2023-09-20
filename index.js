const fruit = prompt("What is your favorite fruit?");

if (fruit == "Bananas" || fruit == "bananas") {
  alert("You like bananas as well");
} else if (fruit == "Strawberry" || fruit == "strawberry") {
  alert("You LOVE strawberries");
} else if (fruit == "Grape" || fruit == "grape") {
  let color = prompt("Do you prefers purple or green grapes?");

  if (color == "purple") {
    alert("you don't like purple grapes.");
  } else if (color == "green") {
    alert("green grapes are ok...");
  } else {
    alert("I don't understand.");
  }
} else {
  alert(`I don't understand the word ${fruit}`);
}
