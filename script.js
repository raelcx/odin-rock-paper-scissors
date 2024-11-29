function getComputerChoice() {
    let generateRandomNumber = Math.floor((Math.random() * 3) + 1 )
    let computerChoice;

    switch(generateRandomNumber) {
        case(1): computerChoice = "rock";
        break
        case(2): computerChoice = "paper";
        break
        case(3): computerChoice = "scissors";
        break
    }

    return computerChoice;
}

function getHumanChoice() {
    let keepRunning = true;
    let choice;

    while (keepRunning) {
        choice = prompt("Choose between rock, paper or scissors! What is your choice?").toLowerCase();
        if (choice != "rock" && choice != "scissors" && choice != "paper") {
            alert("Choose only between ROCK, PAPER or SCISSORS!");
        } else {
            keepRunning = false;
        }
    }
    return choice;
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice == computerChoice) {
        console.log("It's a tie!");
        return "tie";
    }
    
    if (humanChoice == "rock" && computerChoice == "scissors") {
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        return "human";
    } 

    if (humanChoice == "paper" && computerChoice == "rock") {
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        return "human";
    } 

    if (humanChoice == "scissors" && computerChoice == "paper") {
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        return "human";
    } 
    
    else {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
        return "computer";
    }
}

function playGame() {

    let humanScore = 0;
    let computerScore = 0;

    
    for (i = 0; i < 5; i++) {
        let result = playRound(getHumanChoice(), getComputerChoice());

        if (result == "human") {
            humanScore += 1;
        } else if (result == "computer") {
            computerScore += 1;
        }
    }
}



