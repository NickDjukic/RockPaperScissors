//variables
let playerScore = 0;
let computerScore = 0;
const choices = document.querySelectorAll('.choice');


//eventlisteners
choices.forEach(choice => choice.addEventListener('click', playerChoice));


function playerChoice(e) {
    const playerChoice = e.target.id;
    const computerChoice = computerSelection();
    const winner = getWinner(playerChoice, computerChoice);
    const scoreboard = getScore(winner);
    showResults();

    function showResults() {

        const displayPlayerScore = document.querySelector('.playerScore');
        const displayComputerScore = document.querySelector('.computerScore');
        const displayResults = document.querySelector('.displayResults');
        const displayPlayerResult = document.querySelector('.playerChoice');
        const displayComputerResult = document.querySelector('.computerChoice');

        displayPlayerScore.innerHTML = playerScore;
        displayComputerScore.innerHTML = computerScore;
        displayResults.innerHTML = "Result: " + winner;
        displayPlayerResult.innerHTML = "You picked " + playerChoice + ".";
        displayComputerResult.innerHTML = "Computer picked " + computerChoice + ".";

    }
}

function computerSelection() {
    const rand = Math.random()

    if (rand <= .33) {
        return 'rock';
    } else if (rand <= .66) {
        return 'scissors';
    } else {
        return 'paper';
    }

}

const getWinner = (playerChoice, computerChoice) => {
    console.log(playerChoice, computerChoice);

    if (playerChoice == computerChoice) {
        return 'draw';
    } else if (playerChoice == 'rock') {
        if (computerChoice == 'scissors') {
            return 'win'
        } else {
            return 'lose'
        }
    } else if (playerChoice == 'scissors') {
        if (computerChoice == 'paper') {
            return 'win'
        } else {
            return 'lose'
        }
    } else {
        if (computerChoice == 'rock') {
            return 'win'
        } else {
            return 'lose'
        }
    }

}

function getScore(winner) {

    if (winner == 'lose') {
        computerScore++;
    } else if (winner == 'win') {
        playerScore++;
    } else {
        // console.log('no score');
    }

    console.log(playerScore, computerScore);
    checkWin(playerScore, computerScore);
}

function checkWin(playerScore, computerScore) {
    if (playerScore >= 5) {
        resetScore();
        displayResults.innerHTML = "you win!";

    } else if (computerScore >= 5) {
        resetScore();
        displayResults.innerHTML = "you lose game";

    } else {
        return '';
    }
}

function resetScore() {
    playerScore = 0;
    computerScore = 0;
}