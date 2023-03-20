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
        return "rock";
    } else if (randomNumber === 2) {
        return "paper";
    } else {
        return "scissors";
    }
}
computerChoice = getComputerChoice();

// This function determines who wins the round.

function playRound(playerChoice, computerChoice) {
    switch (true) {
        case (playerChoice === "rock") && (computerChoice === "scissors"):
            return "You win :) Rock beats Scissors!";
        case (playerChoice === "paper") && (computerChoice === "rock"):
            return "You win :) Paper beats Rock!";
        case (playerChoice === "scissors") && (computerChoice === "paper"):
            return "You win :) Scissors beats Paper!";
        case (computerChoice === "rock") && (playerChoice === "scissors"):
            return "You lose :( Rock beats Scissors!";
        case (computerChoice === "paper") && (playerChoice === "rock"):
            return "You lose :( Paper beats Rock!";
        case (computerChoice === "scissors") && (playerChoice === "paper"):
            return "You lose :( Scissors beats Paper!";
        default:
            return "It is a draw :/"
    }
}



