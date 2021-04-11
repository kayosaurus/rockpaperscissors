let findWinner = (playerSelection, computerSelection) => {
    if (playerSelection == computerSelection) {
        return;
    }
    else if (playerSelection == "Rock" && computerSelection == "Scissors") {
        console.log(`Player Wins: ${playerSelection} beats ${computerSelection}`);
        return true;
    }
    else if (playerSelection == "Rock" && computerSelection == "Paper") {
        console.log(`Computer Wins: ${computerSelection} beats ${playerSelection}`);
        return false;
    }
    else if (playerSelection == "Paper" && computerSelection == "Rock") {
        console.log(`Player Wins: ${playerSelection} beats ${computerSelection}`);
        return true;
    }
    else if (playerSelection == "Paper" && computerSelection == "Scissors") {
        console.log(`Computer Wins: ${computerSelection} beats ${playerSelection}`);
        return false;
    }
    else if (playerSelection == "Scissors" && computerSelection == "Paper") {
        console.log(`Player Wins: ${playerSelection} beats ${computerSelection}`);
        return true;
    }
    else if (playerSelection == "Scissors" && computerSelection == "Rock") {
        console.log(`Computer Wins: ${computerSelection} beats ${playerSelection}`);
        return false;
    }
}

let computerPlay = () => {
    let cpuPlay = Math.floor(Math.random()* 3);

    switch(cpuPlay) {
        case 0:
            return "Rock";
        case 1:
            return "Paper";
        case 2:
            return "Scissors";
        default:
            console.log("Error in SwitchCase");
    }
}

let game = () => {
    let playerScore = 0;
    let computerScore = 0;

    while (playerScore < 5 && computerScore < 5) {
        playerSelection = computerPlay();
        computerSelection = computerPlay();
        console.log(`Player plays:      ${playerSelection}`)
        console.log(`Computer plays:    ${computerSelection}`);
        if (findWinner(playerSelection, computerSelection) == 1) {
            playerScore++;
        }
        if (findWinner(playerSelection, computerSelection) == 0) {
            computerScore++;
        }
    }

    if (playerScore == 5) {
        console.log(`Player wins: ${playerScore} vs ${computerScore}`);
    }
    else if (computerScore == 5) {
        console.log(`Computer wins: ${playerScore} vs ${computerScore}`);
    }
}

game();