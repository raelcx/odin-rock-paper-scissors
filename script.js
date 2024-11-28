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

