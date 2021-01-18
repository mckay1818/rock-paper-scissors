//get reference to HTML body & buttons
const container = document.querySelector('#container');
const buttons = document.querySelectorAll('button');
const rps = ['rock', 'paper', 'scissors'];
let playerScore = document.getElementById('player-score').innerHTML;
let computerScore = document.getElementById('computer-score').innerHTML;


//initiate round via onclick listener
buttons.forEach(button => {
    button.addEventListener('click', () => {
        let playerSelection = button.getAttribute('id');
        console.log(playerSelection);
        playRound(playerSelection);
    });
});

    
//get computerSelection
function computerPlay() {
    let computerSelection = rps[Math.floor(Math.random() * rps.length)];
    console.log(computerSelection)
    return computerSelection;
}

function playRound(playerSelection) {
    //get computer selection
    computerSelection = computerPlay();
    //compare selections and return string that declares winner
    if (playerSelection == computerSelection) {
        return console.log(`It\'s a tie! Score is ${playerScore} to ${computerScore}.`);
    } else if ((playerSelection == 'scissors' && computerSelection == 'paper') ||
    (playerSelection == 'paper' && computerSelection == 'rock') ||
    (playerSelection == 'rock' && computerSelection == 'scissors')) {
        playerScore++;
        return console.log(`You are victorious! ${playerSelection[0].toUpperCase()}${playerSelection.slice(1)} beats ${computerSelection}. Score is ${playerScore} to ${computerScore}.`);
     } else {
        computerScore++;
        return console.log(`You lose. ${computerSelection[0].toUpperCase()}${computerSelection.slice(1)} beats ${playerSelection}. Score is ${playerScore} to ${computerScore}.`);
    }
}

function checkGameOver(playerScore, computerScore) {
    //declare final winner
   if (playerScore == 5 || computerScore == 5) {
        if (playerScore == 5) {
            return console.log('You win! Humanity lives to fight another day.');
        } else {
            return console.log('You lose! Who will save us from the computers now?');
       }
    }
    return;
}