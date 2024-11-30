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
        return 2;
    }
    
    if (humanChoice == "rock" && computerChoice == "scissors") {
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        return 0;
    } 

    if (humanChoice == "paper" && computerChoice == "rock") {
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        return 0;
    } 

    if (humanChoice == "scissors" && computerChoice == "paper") {
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        return 0;
    } 
    
    else {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
        return 1;
    }
}

const btn = document.querySelector("#container");
btn.addEventListener("click", (e) => {
    const humanChoice = e.target.id;

    switch(humanChoice) {
        case('rock'):
            playRound('rock', getComputerChoice());
            break;
        case('paper'):
            playRound('paper', getComputerChoice());
            break;
        case('scissors'):
            playRound('scissors', getComputerChoice());
            break;
    }
})

