getComputerChoice(0,1,2)
function getComputerChoice(r,p,s){
let number = Math.floor(Math.random() * 3)
if(number == 0){
    console.log("rock")
}
else if(number == 1){
    console.log("paper")
}
else{
    console.log("scissors")
}
}
