function getComputerChoice() {
    // Math.random * 3 ==> 0 - 2.99999, 
    // Math.floor ==> 0 - 2
    // +1 => 1 - 3
    const choices = ["rock", "paper", "scissors"];
    const choiceIndex = Math.floor(Math.random() * 3);
    return choices[choiceIndex];
}

console.log(getComputerChoice())