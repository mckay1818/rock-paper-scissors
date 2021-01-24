//get reference to HTML body & buttons, initialize score & declare game options
const playerScore_span = document.getElementById('player-score');
const computerScore_span = document.getElementById('computer-score');
const btn_div = document.querySelectorAll('button');
const btn_container = document.getElementById('btn-container');
const result_div = document.querySelector('#result');
let playerScore = 0;
let computerScore = 0;
const rps = ['rock', 'paper', 'scissors'];

//initiate round via onclick listener
btn_div.forEach(btn => {
    btn.addEventListener('click', () => {
        let playerSelection = btn.getAttribute('id');
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
    const playerSelection_div = document.getElementById(playerSelection);
    computerSelection = computerPlay();
    //compare selections and return string that declares winner
    if (playerSelection === computerSelection) {
        roundTie(playerScore, computerScore);
    } else if ((playerSelection === 'scissors' && computerSelection === 'paper') ||
               (playerSelection === 'paper' && computerSelection === 'rock') ||
               (playerSelection === 'rock' && computerSelection === 'scissors')) {
        roundWin(playerSelection, playerSelection_div);
     } else {
        roundLoss(playerSelection, playerSelection_div);
    }
}

function roundTie(playerScore, computerScore) {
    result_div.innerHTML= `It\'s a tie! Score is ${playerScore} to ${computerScore}.`;
    checkGameOver(playerScore, computerScore);
}

function roundWin(playerSelection, playerSelection_div) {
    playerScore++;
    playerScore_span.innerHTML = playerScore;
    result_div.innerHTML= `You are victorious! ${playerSelection[0].toUpperCase()}${playerSelection.slice(1)} beats ${computerSelection}. Score is ${playerScore} to ${computerScore}.`;
    document.getElementById(playerSelection).classList.add('win');
    setTimeout(() => playerSelection_div.classList.remove('win'), 1000);
    checkGameOver(playerScore, computerScore);
}

function roundLoss(playerSelection, playerSelection_div) {
    computerScore++;
    computerScore_span.innerHTML = computerScore; 
    result_div.innerHTML= `You lose. ${computerSelection[0].toUpperCase()}${computerSelection.slice(1)} beats ${playerSelection}. Score is ${playerScore} to ${computerScore}.`;
    document.getElementById(playerSelection).classList.add('loss');
    setTimeout(() => playerSelection_div.classList.remove('loss'), 1000);
    checkGameOver(playerScore, computerScore);
}

function checkGameOver(playerScore, computerScore) {
    //declare final winner
   if (playerScore === 5 || computerScore === 5) {
        if (playerScore === 5) {
            result_div.style.fontSize = '100px';
            result_div.innerHTML = 'Game Over - You Win! Humanity lives to fight another day.';
            btn_container.innerHTML = '';
            setTimeout(endGame, 5000);
        } else {
            result_div.style.fontSize = '100px';
            result_div.innerHTML = 'Game Over - You Lose! Who will save us from the computers now?';
            btn_container.innerHTML = '';
            setTimeout(endGame, 5000);
       }
    }
    return;
}

function endGame() {
    window.location.reload();
}