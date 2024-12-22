// This is very simple, but sphaghetti code. playRound() does multiple things at once, and should be refactored to do one thing (return round result).

const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");
const tally = document.querySelector("#tally");
let humanScore = 0;
let computerScore = 0;

const btnClickHandler = (event) => {
  const playerSelection = event.target.id;
  console.log(playerSelection);
  const computerChoice = getComputerChoice();
  playGame(playerSelection, computerChoice);
};

rockBtn.addEventListener("click", btnClickHandler);
paperBtn.addEventListener("click", btnClickHandler);
scissorsBtn.addEventListener("click", btnClickHandler);

const validChoices = ["rock", "paper", "scissors"];

function getComputerChoice() {
  // Math.random * 3 ==> 0 - 2.99999,
  // Math.floor ==> 0 - 2
  const choiceIndex = Math.floor(Math.random() * 3);
  return validChoices[choiceIndex];
}

function playRound(humanChoice, computerChoice) {
  const textElement = document.createElement("p");

  if (humanChoice === computerChoice) {
    textElement.innerText = "DRAW";
  } else if (humanChoice === "rock") {
    if (computerChoice === "scissors") {
      humanScore++;
      textElement.innerText = "You WIN! Rock beats scissors";
    } else if (computerChoice === "paper") {
      computerScore++;
      textElement.innerText = "You LOSE! Paper beats rock";
    }
  } else if (humanChoice === "scissors") {
    if (computerChoice === "paper") {
      humanScore++;
      textElement.innerText = "You WIN! Scissors beats paper";
    } else if (computerChoice === "rock") {
      computerScore++;
      textElement.innerText = "You LOSE! Rock beats scissors";
    }
  } else if (humanChoice === "paper") {
    if (computerChoice === "rock") {
      humanScore++;
      textElement.innerText = "You WIN! Paper beats rock";
    } else if (computerChoice === "scissors") {
      computerScore++;
      textElement.innerText = "You LOSE! Scissors beats paper";
    }
  }

  tally.appendChild(textElement);
}

function playGame(playerSelection, computerChoice) {
  if (humanScore < 5 && computerScore < 5) {
    playRound(playerSelection, computerChoice);
  } else {
    const textElement = document.createElement("p");
    if (humanScore > computerScore) {
      textElement.innerText = "Human won!";
    } else if (humanScore < computerScore) {
      textElement.innerText = "Computer won!";
    } else {
      textElement.innerText = "Draw! Nobody won!";
    }
    tally.appendChild(textElement);
  }
}
