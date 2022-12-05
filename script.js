function getComputerChoice() {
    const array = ["rock", "paper", "scissors"];
    return array[Math.floor(Math.random() * array.length)];
 }

function game(){
    for(let i = 0; i < 5; i++){
        let computerSelection = getComputerChoice();
        let playerSelection = prompt("choice?");
        console.log(`Round: ${round}`);
        if(computerSelection == playerSelection){
            res ="same";
        }
        if(computerSelection == "rock" && playerSelection == "paper"){
            res ="won";
        }
        if(computerSelection == "rock" && playerSelection == "scissors")
            res ="lost";
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

        if(comp == 3){
            console.log("COMPUTER WINS!");
            break;
        }
        else if(me == 3){
            console.log("YOU WIN!");
            break;
        }
        round++;
    }
}

let me = 0, comp = 0, round = 1, res = "";
game();


