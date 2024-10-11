const validChoices = ["rock", "paper", "scissors"];
let humanScore = 0;
let computerScore = 0;

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

function playRound(humanChoice, computerChoice) {
  if (humanChoice === "rock") {
    if (computerChoice === "scissors") {
      humanScore++;
      console.log("You WIN! Rock beats scissors");
    } else if (computerChoice === "paper") {
      computerScore++;
      console.log("You LOSE! Paper beats rock");
    }
  } else if (humanChoice === "scissors") {
    if (computerChoice === "paper") {
      humanScore++;
      console.log("You WIN! Scissors beats paper");
    } else if (computerChoice === "rock") {
      computerScore++;
      console.log("You LOSE! Rock beats scissors");
    }
  } else if (humanChoice === "paper") {
    if (computerChoice === "rock") {
      humanScore++;
      console.log("You WIN! Paper beats rock");
    } else if (computerChoice === "scissors") {
      computerScore++;
      console.log("You LOSE! Scissors beats paper");
    }
  } else if (humanChoice === computerChoice) {
    console.log("DRAW");
  }
}

const humanChoice = getHumanChoice();
const computerChoice = getComputerChoice();
playRound(humanChoice, computerChoice);