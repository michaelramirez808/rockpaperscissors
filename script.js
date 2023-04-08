let playerWins = 0;
let computerWins = 0;

for(let i=0; i<5; i++){
let input = prompt("Rock, Paper, or Scissors? (Best out of 5)")
if(input.toLowerCase() == "rock"){
    input = 0;
}
else if(input.toLowerCase() == "paper"){
    input = 1;
}
else if(input.toLowerCase() == "scissors"){
    input = 2;
}
else{
    (console.log("Input a valid object idiot."))
    continute; //go to next iteration of the loop
}

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

let result = singleRound(number, input);
console.log(result);
}


function singleRound(number, input){
    if(number==0 && input==1){
        playerWins++;
        return("You win.");
    }
    else if(number==1 && input==0){
        computerWins++;
        return("You lose.");
    }
    else if(number==0 && input==0){
        return("Tie.");
    }
    else if(number==1 && input==1){
        return("Tie.");
    }
    else if(number==0 && input==2){
        computerWins++;
        return("You lose.");
    }
    else if(number==2 && input==0){
        playerWins++;
        return("You win.");
    }
    else if(number==2 && input==1){
        computerWins++;
        return("You lose.");
    }
    else if(number==1 && input==2){
        playerWins++;
        return("You win.");
    }
    else if(number==2 && input==2){
        return("Tie.");
    }
    else "Input a valid object idiot.";
}
}

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