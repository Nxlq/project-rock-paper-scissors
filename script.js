/* 2 player game, one human one computer
both players choose between a rock, paper, or scissors
choices are compared against one another to decide the winner
rock beats scissors, paper beats rock, scissors beats paper
winner is declared */

// function to generate the computer's choice
function getComputersChoice () {
    const choices = ['rock', 'paper', 'scissors'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

// getComputersChoice();
// getComputersChoice();
// getComputersChoice();


// function to recieve the player's choice
function getPlayersChoice () {
    let playersInput;

    // get the prompt input and make it all lowercase
    playersInput = prompt('What is your choice?').toLowerCase();
 
    // if the player's input is not a valid choice (rock, paper, or scissors) then prompt for a new input until it is valid
     while (playersInput !== 'rock' && playersInput !== 'paper' && playersInput !== 'scissors') {
            console.log(`not valid ${playersInput}`);
            playersInput = prompt('Not a valid weapon choice 😡 choose again').toLowerCase();
        }
        
        // once it is valid then return the players choice
        return playersInput;
    };


// getPlayersChoice();

// Play a single round of rock paper scissors
function playRound (computersChoice, playersChoice){
    // if there is no input
    if(!computersChoice || !playersChoice) return;

    console.log(`computer's choice: ${computersChoice}`);
    console.log(`your choice: ${playersChoice}`);

    // if there is a tie
    if (computersChoice === playersChoice){
        console.log(`Draw 😬 you both chose ${computersChoice}`)
        return;
    };

    // if the player loses
    if (playersChoice === 'rock' && computersChoice === 'paper' || 
    playersChoice === 'paper' && computersChoice === 'scissors' || 
    playersChoice === 'scissors' && computersChoice === 'rock') {

        console.log(`You lose 🤣🤣 ${computersChoice} beats ${playersChoice} 🤡🤡🤡🤡`)
        return 'computerWins';
    };

    // if the player wins
    console.log(`You win 🥳🥳 ${playersChoice} beats ${computersChoice}`);
    return 'playerWins';
}

// playRound(getComputersChoice(), getPlayersChoice());

// prompt player to choose between a best of 1, 3, 5, or 7
function getBest0fWhat (){
    let userInput;
    let scoreToWin;

    // get the prompt input and change type to number
    userInput = +prompt('Would you like to play a best of 1, 3, 5, or 7?')

    // if the input is not a valid choice then re-prompt
    while (userInput !== 1 && userInput !== 3 && userInput !== 5 && userInput !== 7){
        userInput = +prompt('please choose between a best of 1, 3, 5, or 7 😡')
    };

    // calculate the score to win
    scoreToWin = Math.ceil(userInput / 2);
    
    console.log(`--- Best of ${userInput} ---`);
    return scoreToWin;

}

// play a series of rounds
function playGameSeries (bestOfWhat){
    let playerScore = 0;
    let computerScore = 0;

    for(let i = 0; i < 5; i++){
      switch (playRound(getComputersChoice(), getPlayersChoice())){
        case 'playerWins': 
            playerScore++;
            break;
        case 'computerWins':
            computerScore++;
            break;        
      }

      console.log(`Player's score: ${playerScore}`);
      console.log(`Computer's score ${computerScore}`);
      console.log('__________________________________________');
    }

    if(playerScore === computerScore){
        console.log(`It's a tie 🤠🤝🤖 let there be peace... for now`);
        return;
    } else if (playerScore > computerScore){
        console.log(`You defeated the computer ${playerScore} to ${computerScore} 🎉🌎👨‍👩‍👧‍👦 the people rejoice!`)
    } else {
        console.log(`The computer has defeated you ${computerScore} to ${playerScore} ☠☠💥🌎 we're all doomed...`)
    }
}

playGameSeries()