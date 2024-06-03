let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const comScorePara = document.querySelector("#comp-score");

const genComputerChoice = () => {
    const option = ["rock", "paper", "scissors"];
    const randidx = Math.floor(Math.random() * 3);
    return option[randidx];
}

const drawgame = () => {
    console.log("draw game");
    msg.innerText = "game was draw";
    msg.style.backgroundColor = " #081b31";
}

const showWinner= (userWin)=>{
    if(userWin){

        userScore++;
        userScorePara.innerText=userScore;
        msg.innerText = "you win";
        msg.style.backgroundColor = "green";
    }else{
        compScore++;
        comScorePara.innerText=compScore;
        console.log("you lost");
        msg.innerText = "you lost";
        msg.style.backgroundColor = "red";
    }
}

const playGames = (userChoice) => {
    console.log("user choice = ", userChoice)

    const compChoice = genComputerChoice();
    console.log("comp choice = ", compChoice);

    if (userChoice == compChoice) {
        drawgame();
    }
    else{
        let userWin = true;
        if(userChoice==="rock"){
          userWin =  compChoice==="paper" ? false:true;
        }
    
    else if(userChoice==="paper"){
       userWin= compChoice==="scissors" ? false:true;
    }
    else{
         userWin=  compChoice==="rock" ? false:true;
    }

    showWinner(userWin)
         
    }

};

choices.forEach((choice) => {
    console.log(choice);
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGames(userChoice);
    });
});





