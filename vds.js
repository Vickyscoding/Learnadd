let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");


const genCompChoice = () => {
    const options = ["rock","paper","scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options [randIdx];

}

const drawGame = () => {
    console.log("game was draw.");
    msg.innerText = "game was Draw. play again " ;

};

const showWinner = (userWin) => {
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        console.log("you win");
        msg.innerText = "you win!" ;
        msg.style.backgroundColor = "green" ;
    }else{
        compScore++;
        compScorePara.innerText = compScore;
        console.log("you lose");
        msg.innerText = "you lost."
        msg.style.backgroundColor = "red" ;

    }
}

const playGame =(userChoice) => {
    console.log("user choice = ", userChoice);
    //Genrate comp choice
    const compChoice = genCompChoice();
    console.log("comp choice = ",compChoice);

    if (userChoice === compChoice) {
        //draw game
        drawGame();
    }else{
        let userWin = true;
        if(userChoice === "rock"){
            // comp choice scissors,paper
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper"){
            //rock.scissors
           userWin = compChoice === "scissors" ? false : true ;
            
        }else{
            userWin = compChoice === "rock" ? false : true ;

        }
        showWinner(userWin);

        }

};


choices.forEach ((choice) => {
    choice.addEventListener("click",() => {
       const userChoice = choice.getAttribute("id");
       playGame(userChoice);
});
    
});