////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
  return move || getInput();
}

function getComputerMove(move) {
  return move || randomPlay();
}

function getWinner(playerMove,computerMove) {
    var winner;

    if (playerMove === "paper" && computerMove === "rock") {
        console.log("player wins");
        return "player";
    }
    else if (playerMove === "rock" && computerMove === "paper") {
        console.log("computer wins");
        return "computer";
    }
    else if (playerMove === "rock" && computerMove === "scissors") {
        console.log("player wins");
        return "player";
    }
    else if (playerMove === "scissors" && computerMove === "paper") {
        console.log("player wins");
        return "player";
    }
    else if (playerMove === "paper" && computerMove === "scissors") {
        console.log("computer wins");
        return "computer";
    }
    else if (playerMove === "scissors" && computerMove === "rock") {
        console.log("computer wins");
        return "computer";
    }
    else if (playerMove === "paper" && computerMove === "rock") {
        console.log("Computer wins");
        return "computer";
    }
    else {
        console.log("tie");
        return "tie";
    }
}

function playToFive() {
    var playerWins = 0;
    var computerWins = 0;
    console.log("Let's play again");
    while ((playerWins < 5) || (computerWins < 5)) {
        var playerMove = getPlayerMove();
        var computerMove = getComputerMove();
        var winner = getWinner(playerMove, computerMove);

        if (winner === "player") {
            playerWins = playerWins + 1;
        }
        else if (winner === "computer") {
            computerWins = computerWins + 1;
        }
    }
}
playToFive();
