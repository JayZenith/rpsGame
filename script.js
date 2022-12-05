function getComputerChoice() {
    const array = ["rock", "paper", "scissors"];
    return array[Math.floor(Math.random() * array.length)];
 }

function game(playerSelection, computerSelection){
    for(let i = 0; i < 5; i++){
        console.log(`Round: ${round}`);
        if(computerSelection == playerSelection){
            res ="same";
        }
        if(computerSelection == "rock" && playerSelection == "paper"){
            res ="won";
        }
        if(computerSelection == "rock" && playerSelection == "scissors")
            res ="won";
        if(computerSelection == "paper" && playerSelection == "rock")
            res ="lost";
        if(computerSelection == "paper" && playerSelection == "scissors")
            res ="won";
        if(computerSelection == "scissors" && playerSelection == "rock")
            res = "won";
        if(computerSelection == "scissors" && playerSelection == "paper")
            res = "lost";

        if(res == "same"){
            console.log(`Same! as ${playerSelection} == ${computerSelection}`);
        }
        if(res == "won"){
            me++;
            console.log(`You Win! ${playerSelection} beats ${computerSelection}`);
        }
        if(res == "lost"){
            comp++;
            console.log(`You Lose! ${playerSelection} loses to ${computerSelection}`);
        }

        if(comp == 3)
            console.log("comp wins");
        if(me == 3){
            console.log("I win");
        }
        round++;
    }
}

let me = 0;
let comp = 0;
let round = 1;
let res = "";
let computer = getComputerChoice();
let player = prompt("choice?");
game(player, computer);
