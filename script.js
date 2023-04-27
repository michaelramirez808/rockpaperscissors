let playerWins = 0;
let computerWins = 0;
let playerChoice;

const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorsButton = document.getElementById("scissors");

//for(let i=0; i<5; i++){
rockButton.addEventListener('click', function(){
    playerChoice = 0
    getComputerChoice();
});
paperButton.addEventListener('click', function(){
    playerChoice = 1
    getComputerChoice();
});
scissorsButton.addEventListener('click', function(){
    playerChoice = 2
    getComputerChoice();
});

getComputerChoice();


function getComputerChoice(){
let number = Math.floor(Math.random() * 3)
if(number==0){
    console.log("Computer chooses Rock");
}
else if(number==1){
    console.log('Computer chooses Paper');
}
else{
    console.log('Computer chooses Scissors');
}

let result = singleRound(number, playerChoice);
console.log(result);
}

const resultDiv = document.getElementById("resultDiv");

function singleRound(number, playerChoice){
    if(number==0 && playerChoice==1){
        playerWins++;
        resultDiv.textContent = ("You win.");
    }
    else if(number==1 && playerChoice==0){
        computerWins++;
        resultDiv.textContent = ("You lose.");
    }
    else if(number==0 && playerChoice==0){
        resultDiv.textContent = ("Tie.");
    }
    else if(number==1 && playerChoice==1){
        resultDiv.textContent = ("Tie.");
    }
    else if(number==0 && playerChoice==2){
        computerWins++;
        resultDiv.textContent = ("You lose.");
    }
    else if(number==2 && playerChoice==0){
        playerWins++;
        resultDiv.textContent = ("You win.");
    }
    else if(number==2 && playerChoice==1){
        computerWins++;
        resultDiv.textContent = ("You lose.");
    }
    else if(number==1 && playerChoice==2){
        playerWins++;
        resultDiv.textContent = ("You win.");
    }
    else if(number==2 && playerChoice==2){
        resultDiv.textContent = ("Tie.");
    }
}
//}

console.log("Player Wins:" + playerWins);
console.log("Computer Wins:" + computerWins);

if(playerWins > computerWins){
    console.log("You win the game!");
}
else if(playerWins < computerWins){
    console.log("You lose the game");
}
else{
    console.log("The game is tied.");
}