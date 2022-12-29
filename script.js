/* 2 player game, one human one computer
both players choose between a rock, paper, or scissors
choices are compared against one another to decide the winner
rock beats scissors, paper beats rock, scissors beats paper
winner is declared */
const buttons = document.querySelectorAll('button');
const textContainer = document.querySelector('.text-container');
const promptText = document.querySelector('.prompt-text');
const yourChoiceText = document.createElement('p');
const cockyNerdsChoice = document.createElement('p');
const resultsText = document.createElement('p');
const yourScore = document.querySelector('.your-score');
const nerdsScore = document.querySelector('.nerds-score');
const body = document.querySelector('body');

let playersChoice;
let playerScore = 0;
let computerScore = 0;

;


// play a round of r p s whenever a weapon button is clicked
buttons.forEach(button => button.addEventListener('click', () => {
    playersChoice = button.id;
    playGameSeries();
}));


// function to generate the computer's choice
function getComputersChoice () {
    const choices = ['rock', 'paper', 'scissors'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
};

/*
// function to recieve the player's choice via prompt
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
*/

function addTextContent (el, string){
    el.textContent += string;
}

// Play a single round of rock paper scissors
function playRound (computersChoice, playersChoice){
    // if there is no input
    if(!computersChoice || !playersChoice) return;
    //clean the choices text everytime a button is pressed
    yourChoiceText.textContent = '';
    cockyNerdsChoice.textContent = '';
    resultsText.textContent = '';
    
    promptText.textContent = '🤓📣';
    setTimeout(addTextContent, 300, promptText, 'ROCK! ...');
    setTimeout(addTextContent, 600, promptText, 'PAPER! ...');
    setTimeout(addTextContent, 900, promptText, 'SCISSORS! ...');
    setTimeout(addTextContent, 1200, promptText, 'SHOOT!!!');
    setTimeout(function(){
        yourChoiceText.textContent = `You chose: ${playersChoice}`;
        textContainer.appendChild(yourChoiceText);
        cockyNerdsChoice.textContent = `Cocky Nerd chose: ${computersChoice}`;
        textContainer.appendChild(cockyNerdsChoice);
    }, 1300);
   
    

    console.log('__________________________________________');
    console.log(`computer's choice: ${computersChoice}`);
    console.log(`your choice: ${playersChoice}`);

    // if there is a tie
    if (computersChoice === playersChoice){
        console.log(`Draw 😬 you both chose ${computersChoice}`)
        setTimeout(addTextContent, 1400, resultsText, 'Draw! 🤓 I\'d recommend walking away while you still can...');
        setTimeout(function(){
            textContainer.appendChild(resultsText);
        }, 1400);
        return;
    };

    // if the player loses
    if (playersChoice === 'rock' && computersChoice === 'paper' || 
    playersChoice === 'paper' && computersChoice === 'scissors' || 
    playersChoice === 'scissors' && computersChoice === 'rock') {

        console.log(`You lose 🤣🤣 ${computersChoice} beats ${playersChoice} 🤡🤡🤡🤡`);
        setTimeout(addTextContent, 1400, resultsText, `🤓📣 Nice choice bozo 🤣 ${computersChoice} beats ${playersChoice} you lose 🤣🤣🤣`);
        setTimeout(function(){
            textContainer.appendChild(resultsText);
        }, 1400);
        return 'computerWins';
    };

    // if the player wins
    console.log(`You win 🥳🥳 ${playersChoice} beats ${computersChoice}`);
    setTimeout(addTextContent, 1400, resultsText, `Wait... that can't be right 😨 ${playersChoice} beats ${computersChoice}... I guess even a chump like you can get lucky every once in a while. Go again.`);
        setTimeout(function(){
            textContainer.appendChild(resultsText);
        }, 1400);
    return 'playerWins';
}

// playRound(getComputersChoice(), getPlayersChoice());

// prompt player to choose between a best of 1, 3, 5, or 7
/*
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

    console.log(`--- Best of ${userInput} ⚔ first to ${scoreToWin} wins... ---`);
    return scoreToWin;

}
*/

// play a series of rounds
function playGameSeries (){

    if(!(playerScore < 5) || !(computerScore < 5)){
        playerScore = 0;
        computerScore = 0;
    };

    switch (playRound(getComputersChoice(), playersChoice)){
        case 'playerWins': 
            playerScore++;
            break;
        case 'computerWins':
            computerScore++;
            break;        
      };

    setTimeout(function(){ 
        yourScore.textContent = `Your Score: ${playerScore}`;
        nerdsScore.textContent = `Cocky Nerds Score ${computerScore}`;
    }, 1400);
      
      console.log(`Player's score: ${playerScore}`);
      console.log(`Computer's score: ${computerScore}`);
      console.log('__________________________________________');
    

//    if (playerScore > computerScore){
//         console.log(`You defeated the computer ${playerScore} to ${computerScore} 🎉🌎👨‍👩‍👧‍👦 the people rejoice!`)
//     } else {
//         console.log(`The computer has defeated you ${computerScore} to ${playerScore} ☠☠💥🌎 we're all doomed...`)
//     }
}

