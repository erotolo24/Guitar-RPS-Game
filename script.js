let userScore = 0;
let compScore = 0;

const getUserChoice = (userInput) => {
    userInput = userInput.toLowerCase();
  
    if (
      userInput === 'rock' ||
      userInput === 'paper' ||
      userInput === 'scissors'
    ) {
      return userInput;
    } else {
      console.log("Dude, there's three fine guitars right there, pick one!");
    }
  };
  
  const getComputerChoice = () => {
    const randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
      case 0:
        return 'rock';
      case 1:
        return 'paper';
      case 2:
        return 'scissors';
    }
  };
  
  const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
      return document.getElementById("determineWinner").innerHTML = "Your guitars are the same! Settle your differences and shred!";
    }
  
    if (userChoice === 'rock') {
      if (computerChoice === 'paper') {
        compScore++;
        document.getElementById("compScore").innerHTML = compScore;
        document.getElementById("determineWinner").innerHTML = "You lost... maybe use a metronome next time.";
      } else {
        
      userScore++;
      document.getElementById("userScore").innerHTML = userScore;
      return document.getElementById("determineWinner").innerHTML = "Your guitar won, play a victory solo!";
      }
    }
  
    if (userChoice === 'paper') {
      if (computerChoice === 'scissors') {
        compScore++;
        document.getElementById("compScore").innerHTML = compScore;
        document.getElementById("determineWinner").innerHTML = "You lost... maybe use a metronome next time.";
      } else {
        
      userScore++;
      document.getElementById("userScore").innerHTML = userScore;
      return document.getElementById("determineWinner").innerHTML = "Your guitar won, play a victory solo!";
      }
    }
  
    if (userChoice === 'scissors') {
      if (computerChoice === 'rock') {
        compScore++;
        document.getElementById("compScore").innerHTML = compScore;
        document.getElementById("determineWinner").innerHTML = "You lost... maybe use a metronome next time.";
      } else {
        
      userScore++;
      document.getElementById("userScore").innerHTML = userScore;
      return document.getElementById("determineWinner").innerHTML = "Your guitar won, play a victory solo!";
      }
    }
  };
  
  const playGame = (choice) => {
    const userChoice = getUserChoice(choice);
    const computerChoice = getComputerChoice();
  
    console.log(determineWinner(userChoice, computerChoice));
    
  }

  function resetGame ()  {
    userScore = 0; 
    compScore = 0; 
    result = "";
    document.getElementById("userScore").innerHTML = userScore;
    document.getElementById("compScore").innerHTML = compScore;
    document.getElementById("result").innerHTML = result;
  }