//Title.

console.log("Rock-Paper-Scissors");

// This function receives and validates the player's choice.

function getPlayerChoice() {
    let playerChoice = prompt("Rock, Paper or Scissors?");
    while ((playerChoice !== "rock") && (playerChoice !== "paper") && (playerChoice !== "scissors") && (playerChoice !== null)) {
        alert("Please check your spelling and try again.");
        playerChoice = prompt("Rock, Paper or Scissors?");
    }
    if (playerChoice === null) {
        alert("Sorry to see you go.");
    } else {
        playerChoice = playerChoice.toLowerCase();
    }
    return playerChoice;
}

// This function allows the computer to randomly choose rock, paper or scissors.

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

// This function determines who wins the round.

function playRound() {
    let playerChoice = getPlayerChoice();
    let computerChoice = getComputerChoice();
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
        case (playerChoice === null):
            return "The game is cancelled";
        default:
            return "It is a draw :/";
    }
}

// This function plays five rounds of the game and displays the overall winner.

function game() {
    let playerScore = 0;
    let computerScore = 0;
    let end = false;
    for (let i = 0; i < 5; ++i) {
        let roundWinner = playRound();
        if (roundWinner === "The game is cancelled") {
            end = true;
            break;
        } else {
            console.log("Round", i+1, ":", roundWinner);
            if (roundWinner.slice(0, 7) === "You win") {
                ++playerScore;
            } else if (roundWinner.slice(0, 8) === "You lose"){
                ++computerScore;
            }
        }
    }
    
    if (end) {
        console.log("The game is cancelled.")
    } else if (playerScore > computerScore) {
        console.log("Player score:", playerScore + "\n" + "Computer score:", computerScore + "\n" + "You Win!");
    } else if (playerScore < computerScore) {
        console.log("Player score:", playerScore + "\n" + "Computer score:", computerScore + "\n" + "Sorry, you lose.");
    } else {
        console.log("Player score:", playerScore + "\n" + "Computer score:", computerScore + "\n" + "Well look at that, it's a draw.");
    }
}


// Main program.

game();
