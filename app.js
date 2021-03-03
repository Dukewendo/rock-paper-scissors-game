const game = ()=> {
    let playerScore = 0;
    let CPUscore = 0;

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

    const CPUoptions = ["rock", "paper", "scissors"];

options.forEach(option => {
    option.addEventListener("click", function() {
        
        const CPUnumber = Math.floor(Math.random() * 3);
        const CPUChoice = CPUoptions[CPUnumber];
        

        playerHand.src = `${this.textContent}.png`;
        CPUHand.src = `${CPUChoice}.png`;
        
    });
});
};
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
            return;
        } else {
            winner.textContent = "CPU wins!"
            return;
        }
    }
    // Player choses paper

    if (playerChoice === "paper") {
        if(CPUChoice === "scissors") {
            winner.textContent = "CPU wins!"
            return;
        } else {
            winner.textContent = "Player wins!"
            return;
        }
    }
    // Player choses scissors

    if (playerChoice === "scissors") {
        if(CPUChoice === "rock") {
            winner.textContent = "CPU wins!"
            return;
        } else {
            winner.textContent = "Player wins!"
            return;
        }
    }

}

startGame();
playMatch();
}

game();
