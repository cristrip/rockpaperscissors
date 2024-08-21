
console.log(computerScore, playerScore)

console.log("Rock ,Paper,Scissors")

let choice = ["rock", "paper", "scissors"];
// Generate computers choice randomly//
function getComputerChoice(choice){

    return choice[Math.floor(Math.random() * choice.length)];

}
// This is to store how many rounds
var computerScore = 0;
var playerScore = 0;


function playRound (playerSelection,computerSelection){
    console.log(playerSelection, computerSelection);



if (playerSelection === computerSelection){
return `No winner ,both picked ${playerSelection}!` ;
}
else if (playerSelection === "rock" && computerSelection=== "scissors"){
   playerScore++;
    return `You win! ${playerSelection} beats ${computerSelection}`;
}
else if (playerSelection === "paper" && computerSelection=== "rock"){
    playerScore ++;
    return `You win! ${playerSelection} beats ${computerSelection}`;
}

else if (playerSelection === "scissors" && computerSelection=== "paper"){
   playerScore ++;
    return `You win! ${playerSelection} beats ${computerSelection}`;
}

else {
    computerScore ++;
    return `You Lose! ${computerSelection} beats ${playerSelection}`;
}

}


const playerSelection = prompt("Rock, Paper, Or Scissors?").toLowerCase();
const computerSelection = getComputerChoice(choice);


console.log(playRound(playerSelection,computerSelection));
// this will calculate the rounds of the game
if (computerScore + playerScore ===5){
    // for (let i = 5; i === 5; i++){
        if (computerScore>playerScore && computerScore + playerScore > 5){
            
            console.log('lost')
        }
        else if (computerScore<playerScore && computerScore + playerScore > 5){
            
            console.log('won')   
} 
}


while (computerScore + playerScore <5){
for (let i = 0; i < 5; i++) {
    const playerSelection = prompt("Rock, Paper, Or Scissors?").toLowerCase();
    // user enter his choice
    const computerSelection = getComputerChoice(choice);
    
    console.log(playRound(playerSelection, computerSelection));
    console.log(playerScore, computerScore)
    console.log(computerScore + playerScore)

}
}

playRound()

console.log(computerScore, playerScore)

window.console = {
  log: function(str){
    var node = document.createElement("div");
    node.appendChild(document.createTextNode(str));
    document.getElementById("myLog").appendChild(node);
  }
}
