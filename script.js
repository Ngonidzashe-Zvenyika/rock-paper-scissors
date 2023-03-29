// This function allows the computer to randomly choose rock, paper or scissors.

function getComputerChoice() {
    randomNumber = Math.ceil(Math.random() * 3)
    if (randomNumber === 1) {
        computerSymbol.innerText = `✊`;
        return "rock";
    } else if (randomNumber === 2) {
        computerSymbol.innerText = `✋`;
        return "paper";
    } else {
        computerSymbol.innerText = `✌`;
        return "scissors";
    }
}

// This function takes the player choice as a parameter and compares it to the computer choice.

function playRound(playerChoice) {
    let computerChoice = getComputerChoice();
    switch (true) {
        case (playerChoice === "rock") && (computerChoice === "scissors"):
            return "You win, rock beats scissors!";
        case (playerChoice === "paper") && (computerChoice === "rock"):
            return "You win, paper beats rock!";
        case (playerChoice === "scissors") && (computerChoice === "paper"):
            return "You win, scissors beats paper!";
        case (computerChoice === "rock") && (playerChoice === "scissors"):
            return "You lose, rock beats scissors!";
        case (computerChoice === "paper") && (playerChoice === "rock"):
            return "You lose, paper beats rock!";
        case (computerChoice === "scissors") && (playerChoice === "paper"):
            return "You lose, scissors beats paper!";
        default:
            let string = "It is a draw, " + playerChoice + " is equal to " + computerChoice + ".";
            return string;
    }
}

// This function updates score as the game is played.

function keepScore() {
    let roundWinner = willStoreLastResult;
    if (roundWinner.slice(0, 7) === "You win") {
        ++playerPoints;
        playerScore.innerText = `Player Score: ${playerPoints}`
    } else if (roundWinner.slice(0, 8) === "You lose"){
        ++computerPoints;
        computerScore.innerText = `Computer Score: ${computerPoints}`
    }
}

// This function alerts the user when the games is over.

function gameEnd() {
    if ((playerPoints > computerPoints) && (gameOver === false) && ((playerPoints === 3) || (computerPoints === 3))) {
        dashboard.innerText = `${willStoreLastResult} \n Player Score: ${playerPoints} \n Computer score: ${computerPoints} \n You won the game!`;
        let newGame = document.createElement("div");
        newGame.classList.add("newGame");
        newGame.innerText = "Well done! Click here to play again.";
        winSound.play();
        body.insertBefore(newGame, body.children[4]);
        gameOver = true;
        newGame.addEventListener("click", () => {
            Reset();
        });
    } else if ((playerPoints < computerPoints) && (gameOver === false) && ((playerPoints === 3) || (computerPoints === 3))) {
        dashboard.innerText = `${willStoreLastResult} \n Player Score: ${playerPoints} \n Computer score: ${computerPoints} \n Sorry, you lost the game.`;
        let newGame = document.createElement("div");
        newGame.classList.add("newGame");
        newGame.innerText = "Maybe you'll win next time. Click here to play again.";
        loseSound.play();
        body.insertBefore(newGame, body.children[4]);
        gameOver = true;
        newGame.addEventListener("click", () => {
        Reset();
        });
    }
}

// This function resets all the values for a new game to begin.

function Reset() {
    playerPoints = 0;
    computerPoints = 0;
    gameOver = false;
    playerSymbol.innerText = "❓";
    computerSymbol.innerText = "❓";
    playerScore.innerText = "Player Score: 0";
    computerScore.innerText = "Player Score: 0";
    dashboard.innerText = "FIRST TO 3 - CHOOSE YOUR WEAPON";
    const newGame =  document.querySelector(".newGame")
    newGame.remove();
}


// Main program.

const body = document.querySelector("body")
const playerSymbol = document.querySelector(".playerSymbol");
const computerSymbol = document.querySelector(".computerSymbol");
const playerScore = document.querySelector(".playerScore");
const computerScore = document.querySelector(".computerScore");
const dashboard = document.querySelector(".gameDashboard");
const buttons = document.querySelectorAll("button");
const clickSound = document.querySelector(".click");
const winSound =  document.querySelector(".win");
const loseSound =  document.querySelector(".lose");
let gameOver = false;
let playerPoints = 0;
let computerPoints = 0;
let willStoreLastResult = undefined;

for (const button of buttons) {
    button.addEventListener("click", () => {
        if ((playerPoints <= 3) && (computerPoints <= 3) && (gameOver === false)) {
            let playerChoice = button.className;
            playerSymbol.innerText = button.innerText;
            willStoreLastResult = `${playRound(playerChoice)}` // This variable is needed to display the final game on the dashboard without the words "choose again."
            dashboard.innerText = `${willStoreLastResult} \n Choose again.` 
            clickSound.play();
            keepScore();
        }

        gameEnd();
    }
)};

