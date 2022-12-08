/* 2 player game, one human one computer
both players choose between a rock, paper, or scissors
choices are compared against one another to decide the winner
rock beats scissors, paper beats rock, scissors beats paper
winner is declared */

// function to generate the computer's choice
function getComputersChoice () {
    const choices = ['rock', 'paper', 'scissors'];
    const randomNumber = Math.floor(Math.random() * 3);
    console.log(choices[randomNumber]);
    return choices[randomNumber];
}

getComputersChoice();
getComputersChoice();
getComputersChoice();


// function to recieve the player's choice
function getPlayersChoice () {
    let playersInput;
    // get the prompt input and make it all lowercase
    playersInput = prompt('What is your choice?').toLowerCase();

    // check if it's valid choice selection (return if it is)
    if (playersInput === 'rock' || playersInput === 'paper' || playersInput === 'scissors') {

          return playersInput;  

    } else {
        // if not valid then re-prompt with a different message
        while (playersInput !== 'rock' && playersInput !== 'paper' && playersInput !== 'scissors') {
            console.log(`not valid ${playersInput}`);
            playersInput = prompt('Not a valid weapon choice 😡 choose again').toLowerCase();
        }
    }
    
    
    // once it is valid then return the players choice
    console.log(`now a valid choice ${playersInput}`);
    return playersInput;
}

getPlayersChoice();


// play game 
// compare choices against one another 
// declare winner 