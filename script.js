const validChoices = ["rock", "paper", "scissors"];

function getComputerChoice() {
  // Math.random * 3 ==> 0 - 2.99999,
  // Math.floor ==> 0 - 2
  const choiceIndex = Math.floor(Math.random() * 3);
  return validChoices[choiceIndex];
}

function getHumanChoice() {
  let invalidChoice = true;
  while (invalidChoice) {
    let choice = prompt("What's your choice: ");
    choice = choice.toLowerCase();
    if (validChoices.includes(choice)) {
      return choice;
    }
    console.log("Invalid choice: " + choice);
  }
}

getHumanChoice();