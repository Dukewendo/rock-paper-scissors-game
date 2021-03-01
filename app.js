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
    const playerHand = document.querySelectorAll(".player-hand");
    const CPUHand = document.querySelectorAll(".CPU-hand");

    const CPUoptions = ["rock", "paper", "scissors"];

options.forEach(option=> {
    option.addEventListener("click", function() {
        
        const CPUnumber = Math.floor(Math.random() * 3);
        const CPUChoice = CPUoptions[CPUnumber]
        console.log(CPUnumber)
    });
});

// 33 mins

};


startGame();
playMatch();
}

game();