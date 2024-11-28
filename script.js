function getComputerChoice() {
    let randomNumber;
    let generateRandomNumber = Math.floor((Math.random() * 3) + 1 )

    switch(generateRandomNumber) {
        case(1): randomNumber = "rock";
        break
        case(2): randomNumber = "paper";
        break
        case(3): randomNumber = "scissors";
        break
    }

    return generateRandomNumber;
}

function getHumanChoice() {
    let choice = prompt("Choose between rock, paper or scissors! What is your choice?")
    return choice;
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice == computerChoice) {
        console.log("It's a tie!");
        return;
    }
    
    if (humanChoice == "rock" && computerChoice == "scissors") {
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        return;
    } 

    if (humanChoice == "paper" && computerChoice == "rock") {
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        return;
    } 

    if (humanChoice == "scissors" && computerChoice == "paper") {
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        return;
    } 
    
    else {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
        return;
    }
}



let humanScore = 0;
let computerScore = 0;