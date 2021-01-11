const rps = ['Rock', 'Paper', 'Scissors'];

function computerPlay() {
    let computerSelection = rps[ ~~(Math.random() * rps.length)];
    console.log(computerSelection);
    return computerSelection;
}

computerPlay();

function playRound(playerSelection, computerSelection) {
    //convert both selections to lowercase
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    
    //compare selections and return string that declares winner

    if (playerSelection === computerSelection) {
        return 'It\'s a tie!';
    } else if (playerSelection === rock )
}

const playerSelection = 'rock';
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));

function game() {
    for (let i = 1; i < 5; i++) {
        playRound(playerSelection, computerSelection) {
            if 
        }
    }
}
