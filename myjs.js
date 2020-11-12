function computerPlay(){
    let randNum = Math.floor(Math.random() * Math.floor(3));

    switch (randNum) {
        case 0:
            return "paper";
        case 1:
            return 'rock';
        default:
            return 'scissor';
    }
}

let playerCounter = 0;
let computerCounter = 0;
let round = 1;

const divResult = document.querySelector('#result');

function playRound(playerSelection, computerSelection){

    if(playerCounter >= 5 || computerCounter >= 5){
        return;
    }

    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    const h3RoundTitle =  document.createElement('h3');
    h3RoundTitle.textContent = 'Round ' + round;
    const pInfo = document.createElement('p');
    pInfo.textContent = `Player: ${playerSelection} - Computer: ${computerSelection}`;
    const pResult = document.createElement('p');
    pResult.textContent = selectionCompare(playerSelection, computerSelection);
    const pScore = document.createElement('p');
    pScore.textContent = `Score: Player ${playerCounter} - ${computerCounter} Computer`;

    divResult.appendChild(h3RoundTitle);
    divResult.appendChild(pInfo);
    divResult.appendChild(pResult);
    divResult.appendChild(pScore);

    round++;


    if(playerCounter === 5 || computerCounter === 5){
        const finalResult = document.createElement('h3');
        finalResult.textContent =
            playerCounter === 5 ? 'Player win!' : 'Computer win!';
        divResult.appendChild(finalResult);

        const restartBtn = document.createElement('button');
        restartBtn.textContent = 'Restart';
        restartBtn.addEventListener('click', function(){
            divResult.textContent = '';
            playerCounter = 0;
            computerCounter = 0;
            round = 1;
        });
        divResult.appendChild(restartBtn);
    }
}

function selectionCompare(playerSelection, computerSelection){
    if(playerSelection === computerSelection){
        return 'Draw!';
    } else if(playerSelection === 'rock'){
        if(computerSelection === 'paper'){
            computerCounter++;
            return 'You Lose! Paper beats Rock';
        } else {
            playerCounter++;
            return 'You Win! Rock beats Scissor';
        }
    } else if(playerSelection === 'paper'){
        if(computerSelection === 'rock'){
            playerCounter++;
            return 'You Win! Paper beats Rock';
        } else {
            computerCounter++;
            return 'You Lose! Scissor beats Paper';
        }
    } else if(playerSelection === 'scissor'){
        if(computerSelection === 'rock'){
            computerCounter++;
            return 'You Lose! Rock beats Scissor';
        } else {
            playerCounter++;
            return 'You Win! Scissor beats Paper';
        }
    } else {
        return 'Invalid player\'s input!!!';
    }
}

function game(){

    for (let index = 0; index < 5; index++) {
        console.log('Round ' + (index+1));
        
        let playerSelection = window.prompt("Chose rock, paper or scissor ").trim();
        let computerSelection = computerPlay();

        console.log("Player's selection: " + playerSelection);
        console.log("Computer's selection: " + computerSelection);
        console.log('Result: ' + playRound(playerSelection, computerSelection));
        console.log("Score: Player " + playerCounter + " - " + computerCounter + " Computer.");
    }
}


