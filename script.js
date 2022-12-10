
function getComputerChoice() {
    const array = ["rock", "paper", "scissors"];
    return array[Math.floor(Math.random() * array.length)];
 }


function game(e){
    document.getElementById("end").style.display = "none";
    computerSelection = getComputerChoice();
    if(e.target !== e.currentTarget){
        let clickedItem = e.target.id;
        playerSelection = clickedItem;
    }
    e.stopPropagation();
    console.log("Round:" + round);
    document.getElementById("round").innerHTML = `Round: ${round}`;

    if(computerSelection == playerSelection){
        console.log("me" + me + " comp" + comp);
        console.log(`Same! as ${playerSelection} == ${computerSelection}`);
        document.getElementById("player").innerHTML = `Player: ${me}`;
        document.getElementById("computer").innerHTML = `Computer: ${comp}`;
        document.getElementById("result").innerHTML = `Same! as ${playerSelection} == ${computerSelection}`;
        document.getElementById("result").style.display = "block";

    }
    if(computerSelection == "rock" && playerSelection == "paper" ||
        computerSelection == "paper" && playerSelection == "scissors" ||
        computerSelection == "scissors" && playerSelection == "rock"){
        me++;
        console.log("me" + me);
        console.log(`You Win! ${playerSelection} beats ${computerSelection}`);
        document.getElementById("player").innerHTML = `Player: ${me}`;
        document.getElementById("computer").innerHTML = `Computer: ${comp}`;
        document.getElementById("result").innerHTML = `You Win! ${playerSelection} beats ${computerSelection}`;
        document.getElementById("result").style.display = "block";
    }

    if(computerSelection == "rock" && playerSelection == "scissors" ||
        computerSelection == "paper" && playerSelection == "rock" ||
        computerSelection == "scissors" && playerSelection == "paper"){
        comp++;
        console.log("comp" + comp);
        console.log(`You Lose! ${playerSelection} loses to ${computerSelection}`);
        document.getElementById("player").innerHTML = `Player: ${me}`;
        document.getElementById("computer").innerHTML = `Computer: ${comp}`;
        document.getElementById("result").innerHTML = `You Lose! ${playerSelection} loses to ${computerSelection}`;
        document.getElementById("result").style.display = "block";
    }
    round++;
    if(comp == 3){
        document.getElementById("end").innerHTML = `YOU LOST`;
        document.getElementById("end").style.display = "block";
        console.log("NEW GAME!");
        me = 0, comp = 0;
        round = 1;
    }
    else if(me == 3){
        document.getElementById("end").innerHTML = `YOU WON`;
        document.getElementById("end").style.display = "block";
        console.log("NEW GAME!");
        me = 0, comp = 0;
        round = 1;
    }
    else if(round == 6 && me == comp){
        document.getElementById("end").innerHTML = `TIE!`;
        document.getElementById("end").style.display = "block";
        console.log("NEW GAME!");
        me = 0, comp = 0;
        round = 1;
    }
    else if(round == 6) {
        if(comp > me){
            document.getElementById("end").innerHTML = `YOU LOST`;
            document.getElementById("end").style.display = "block";
            console.log("NEW GAME!");
            me = 0, comp = 0;
            round = 1;
        }
        else if(me > comp){
            document.getElementById("end").innerHTML = `YOU WON`;
            document.getElementById("end").style.display = "block";
            console.log("NEW GAME!");
            me = 0, comp = 0;
            round = 1;
        }
    }
}

function restartGame(){
    console.log("GAME RESTARTED");
    me = 0, comp = 0, round = 1;
    document.getElementById("end").style.display = "none";
    document.getElementById("round").innerHTML = `Round: ${round - 1}`;
    document.getElementById("result").style.display = "none";

}

let playerSelection = "", computerSelection = "", me = 0, comp = 0, round = 1, res="";
let theParent = document.querySelector(".choices");
let restart = document.querySelector(".buttn");
theParent.addEventListener("click", game, false);
restart.addEventListener("click", restartGame, false);
