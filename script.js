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
    console.log(`computer's choice: ${computersChoice}`);
    console.log(`your choice: ${playersChoice}`);
    // if there is a tie
    if (computersChoice === playersChoice) return console.log(`Draw 😬 you both chose ${computersChoice}`);

    // if the player loses
    if (playersChoice === 'rock' && computersChoice === 'paper' || 
    playersChoice === 'paper' && computersChoice === 'scissors' || 
    playersChoice === 'scissors' && computersChoice === 'rock') return console.log(`You lose 🤣🤣 ${computersChoice} beats ${playersChoice} 🤡🤡🤡🤡`);

    // if the player wins
    return console.log(`You win 🥳🥳 ${playersChoice} beats ${computersChoice}`);
}

playRound(getComputersChoice(), getPlayersChoice());
// compare choices against one another 
// declare winner 
// play game