function getComputerChoice() {
    let generateRandomNumber = Math.floor((Math.random() * 3) + 1 )
    let computerChoice;

    switch(generateRandomNumber) {
        case(1): computerChoice = "rock";
        break;
        case(2): computerChoice = "paper";
        break;
        case(3): computerChoice = "scissors";
        break;
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
        return showResult("tie", humanChoice, computerChoice);
    }
    
    if ((humanChoice == "rock" && computerChoice == "scissors")
        || (humanChoice == "paper" && computerChoice == "rock")
        || (humanChoice == "scissors" && computerChoice == "paper")) {
        return showResult("win", humanChoice, computerChoice);
    } 
    else {
        return showResult("lose", humanChoice, computerChoice);
    }
}

function showResult (result, humanChoice, computerChoice) {
    removePreviousResult();

    const body = document.querySelector("body");
    const div = document.createElement("div");
    const p = document.createElement("p");
    div.setAttribute("id", "result");
    div.appendChild(p);

    switch(result) {
        case("lose"):
            p.textContent = `You lose! ${computerChoice} beats ${humanChoice}`;
            break;
        case("win"):
            p.textContent = `You win! ${humanChoice} beats ${computerChoice}`;
            break;
        case("tie"):
            p.textContent = "It's a tie!";
            break;
    }

    body.appendChild(div);
}

function removePreviousResult() {
    const previousResult = document.getElementById("result");
    if (previousResult) previousResult.remove();
    return;
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

