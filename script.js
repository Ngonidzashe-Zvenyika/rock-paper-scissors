console.log("Rock-Paper-Scissors")
let computerChoice = undefined;

// This function allows the computer to randomly choose rock, paper or scissors.

function getComputerChoice() {
    randomNumber = Math.ceil(Math.random() * 3)
    if (randomNumber === 1) {
        return computerChoice = "rock";
    } else if (randomNumber === 2) {
        return computerChoice = "paper";
    } else {
        return computerChoice = "scissors";
    }
}



