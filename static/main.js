document.addEventListener("DOMContentLoaded", () => {
    const choices = ["rock", "paper", "scissors"];
    let wins = 0;
    let losses = 0;
  
    const resultText = document.getElementById("result-text");
    const playerChoiceText = document.getElementById("player-choice-text");
    const computerChoiceText = document.getElementById("computer-choice-text");
    const winsText = document.getElementById("wins-text");
    const lossesText = document.getElementById("losses-text");
    const winPercentageText = document.getElementById("win-percentage-text");
  
    const buttons = document.querySelectorAll(".choice-btn");
    buttons.forEach((btn) => {
      btn.addEventListener("click", () => {
        const playerChoice = btn.getAttribute("data-choice");
        const computerChoice = choices[Math.floor(Math.random() * choices.length)];
  
        playerChoiceText.innerHTML = `You chose: ${playerChoice}`;
        computerChoiceText.innerHTML = `Computer chose: ${computerChoice}`;
  
        const result = determineWinner(playerChoice, computerChoice);
        resultText.innerHTML = result;
        resultText.style.color = result === "You win!" ? "lightgreen" : result === "Computer wins!" ? "red" : "white";
  
        if (result === "You win!") {
          wins++;
        } else if (result === "Computer wins!") {
          losses++;
        }
  
        winsText.innerHTML = `Wins: ${wins}`;
        lossesText.innerHTML = `Losses: ${losses}`;
        const winPercentage = (wins / (wins + losses)) * 100 || 0;
        winPercentageText.innerHTML = `Win Percentage: ${winPercentage.toFixed(2)}%`;
      });
    });
  
    function determineWinner(playerChoice, computerChoice) {
      if (playerChoice === computerChoice) return "It's a tie!";
      if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper")
      ) {
        return "You win!";
      } else {
        return "Computer wins!";
      }
    }
  });
  