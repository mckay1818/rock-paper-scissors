const rps = ['Rock', 'Paper', 'Scissors'];

//get computerSelection
function computerPlay() {
    let computerSelection = rps[ ~~(Math.random() * rps.length)];
    return computerSelection;
}

//get playerSelection
function userPlay() {
    let playerSelection = window.prompt('Choose your weapon! Rock, paper, or scissors.');

    //validate playerSelection as rock, paper, or scissors
    if ((playerSelection !== 'rock') ||
        (playerSelection !== 'paper') ||
        (playerSelection !== 'scissors')) {
        playerSelection = window.prompt('An invalid weapon was chosen. Please choose rock, paper, or scissors.');
    }
}

function playRound(playerSelection, computerSelection) {
    //convert both selections to lowercase
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    
    //compare selections and return string that declares winner
    if (playerSelection === computerSelection) {
        return 'It\'s a tie!';
    } else if ((playerSelection === 'scissors' && computerSelection === 'paper') ||
    (playerSelection === 'paper' && computerSelection === 'rock') ||
    (playerSelection === 'rock' && computerSelection === 'scissors')) {
        playerScore += 1;
        playerSelection = playerSelection.toUpperCase(playerSelection[0]);
        return `You are victorious! ${playerSelection} beats ${computerSelection}.`;
    } else {
        computerScore += 1;
        computerSelection = computerSelection.toUpperCase(computerSelection[0]);
        return `You lose. ${computerSelection} beats ${playerSelection}.`
    }
}

//create a 5 round game
function game() {
    // initialize score
    let playerScore = 0;
    let computerScore = 0;

    //run 5 rounds of playRound
    for (let i = 1; i < 5; i++) {
        computerSelection = computerPlay();
        playerSelection = userPlay();
        playRound(playerSelection, computerSelection);
        console.log(`You have ${playerScore} points. The computer has ${computerScore} points.`)
    }
    if (playerScore > computerScore) {
        console.log('You win! Humanity lives to fight another day.');
    } else {
        console.log('You lose! Who will save us from the computers now?')
    }
}

console.log(game());


