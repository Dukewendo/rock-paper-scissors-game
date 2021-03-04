const game = ()=> {
    let pScore = 0;
    let cScore = 0;

const startGame = () => {
    const playBtn = document.querySelector(".intro button");
    const introScreen = document.querySelector(".intro");
    const match = document.querySelector(".match");

    playBtn.addEventListener("click", () => {
        introScreen.classList.add("fadeOut");
        match.classList.add("fadeIn");
    })
}

const playMatch = () => {
    const options = document.querySelectorAll(".options button");
    const playerHand = document.querySelector(".playerHand");
    const CPUHand = document.querySelector(".CPUHand");
    const hands = document.querySelectorAll(".hands img");

    hands.forEach(hand => {
        hand.addEventListener("animationend", function(){
            this.style.animation = "";
        })
    })
    const CPUoptions = ["rock", "paper", "scissors"];

options.forEach(option => {
    option.addEventListener("click", function() {
        
        const CPUnumber = Math.floor(Math.random() * 3);
        const CPUChoice = CPUoptions[CPUnumber];
        
       setTimeout(() =>{
        compareHands(this.textContent, CPUChoice);

        playerHand.src = `${this.textContent}.png`;
        CPUHand.src = `${CPUChoice}.png`;
       }, 2000)
        
        playerHand.style.animation = "shakePlayer 2s ease";
        CPUHand.style.animation = "shakeCPU 2s ease";
    });
});
};

const updateScore = ()=> {
    const playerScore = document.querySelector(".playerScore p");
    const CPUScore = document.querySelector(".CPUScore p");
    playerScore.textContent = pScore;
    CPUScore.textContent = cScore;
}

    //Who is the winner?
const compareHands = (playerChoice, CPUChoice) => {
const winner = document.querySelector(".winner");
    
    if (playerChoice === CPUChoice) {
        winner.textContent = "A draw!"
        return;
}
    // Player choses rock

    if (playerChoice === "rock") {
        if(CPUChoice === "scissors") {
            winner.textContent = "Player Wins!"
            pScore++;
            updateScore();
            return;
        } else {
            winner.textContent = "CPU Wins!"
            cScore++;
            updateScore();
            return;
        }
    }
    // Player choses paper

    if (playerChoice === "paper") {
        if(CPUChoice === "scissors") {
            winner.textContent = "CPU Wins!"
            cScore++;
            updateScore();
            return;
        } else {
            winner.textContent = "Player Wins!"
            pScore++;
            updateScore();
            return;
        }
    }
    // Player choses scissors

    if (playerChoice === "scissors") {
        if(CPUChoice === "rock") {
            winner.textContent = "CPU Wins!"
            updateScore();
            cScore++;
            return;
        } else {
            winner.textContent = "Player Wins!"
            pScore++;
            updateScore();
            return;
        }
    }

}

startGame();
playMatch();
}

game();
