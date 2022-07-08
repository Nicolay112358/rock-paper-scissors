let playerScore = 0;
let computerScore = 0;

function computerPlay() {

    let randomNumber = Math.floor(Math.random() * 100 / 10);

    if (randomNumber < 3) {
        return "rock";

    } else if (randomNumber >= 3 && randomNumber <= 5) {
        return "paper";

    } else {
        return "scissors";
    }
}

function palyRound(playerSelection, computerSelection) {

    if ((playerSelection.toLowerCase() == "rock" && computerSelection == "scissors") ||
        (playerSelection.toLowerCase() == "paper" && computerSelection == "rock") ||
        (playerSelection.toLowerCase() == "scissors" && computerSelection == "paper")) {

        ++playerScore;
        console.log(`You won, ${playerSelection.toLowerCase()} beats ${computerSelection}.`);

    } else if ((playerSelection.toLowerCase() == "scissors" && computerSelection == "rock") ||
        (playerSelection.toLowerCase() == "rock" && computerSelection == "paper") ||
        (playerSelection.toLowerCase() == "paper" && computerSelection == "scissors")) {

        ++computerScore;
        console.log(`You lose, ${computerSelection} beats ${playerSelection.toLowerCase()}.`);

    } else {
        console.log('Draw, try again');
    }
}

function game() {

    for (let i = 0; i < 5; i++) {
        palyRound(playerSelection = prompt('Choose - rock, paper, scissors.'), computerPlay());
    }

    if (playerScore > computerScore) {
        console.log(`You won this game!!!`);
        console.log(`The score is: player: ${playerScore} computer: ${computerScore}`);
    } else if (playerScore < computerScore) {
        console.log(`You lose this game!!!`);
        console.log(`The score is: computer: ${computerScore}, player: ${playerScore}`);
    } else {
        console.log('Draw, tied.');
    }
}

game();