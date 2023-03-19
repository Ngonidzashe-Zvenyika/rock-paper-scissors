console.log("Rock-Paper-Scissors")

// This loop validates the player's decision.

let playerChoice = prompt("Rock, Paper or Scissors?").toLowerCase();
while ((playerChoice !== "rock") && (playerChoice !== "paper") && (playerChoice !== "scissors")) {
    alert("Please check your spelling and try again.")
    playerChoice = prompt("Rock, Paper or Scissors?").toLowerCase();
}

// This function allows the computer to randomly choose rock, paper or scissors.

let computerChoice = undefined;
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

