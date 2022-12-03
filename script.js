function getComputerChoice() {
    const array = ["rock", "paper", "scissors"];
    return array[Math.floor(Math.random() * array.length)];
 }

function playRound(playerSelection, computerSelection){
    if(computerSelection == playerSelection)
        return "same";
    if(computerSelection == "rock" && playerSelection == "paper")
        return "win";
    if(computerSelection == "rock" && playerSelection == "scissors")
        return "won";
    if(computerSelection == "paper" && playerSelection == "rock")
        return "lost";
    if(computerSelection == "paper" && playerSelection == "scissors")
        return "won";
    if(computerSelection == "scissors" && playerSelection == "rock")
        return "won";
    if(computerSelection == "scissors" && playerSelection == "paper")
        return "lost";
}

 
const computer = getComputerChoice();
const player = prompt("choice?");

const result = playRound(player, computer);

if(result == "win")
    console.log(`You Win! ${player} beats ${computer}`);
if(result == "lost")
    console.log(`You Lose! ${player} loses to ${computer}`);
if(result == "same")
    console.log(`Same! as ${player} == ${computer}`);

