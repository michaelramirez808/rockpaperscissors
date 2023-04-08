let input = prompt("Rock, Paper, or Scissors?")
if(input.toLowerCase() == "rock"){
    input = 0
}
else if(input.toLowerCase() == "paper"){
    input = 1
}
else if(input.toLowerCase() == "scissors"){
    input = 2
}
else(console.log("Input a valid object idiot."))

getComputerChoice(0,1,2)
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


singleRound(number, input)
function singleRound(number, input){
    if(number==0 && input==1){
        console.log("You win.");
    }
    else if(number==1 && input==0){
        console.log("You lose.");
    }
    else if(number==0 && input==0){
        console.log("Tie.");
    }
    else if(number==1 && input==1){
        console.log("Tie.");
    }
    else if(number==0 && input==2){
        console.log("You lose.");
    }
    else if(number==2 && input==0){
        console.log("You win.");
    }
    else if(number==2 && input==1){
        console.log("You lose.");
    }
    else if(number==1 && input==2){
        console.log("You win.");
    }
    else if(number==2 && input==2){
        console.log("Tie.");
    }
    else(console.log("Input a valid object idiot."))
}
}

