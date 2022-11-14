let Rounds = 0;

let UserScore = 0;
let ComputerScore = 0;

let Choice = "";
let FullChoice = "";
let UserChoice = 0;
let ComputerChoice = 0;

let Winner = "";

function playRound() {
    console.log("New Round!");
    Rounds++;

    if (UserScore >= 3 || ComputerScore >= 3)
    {
        Out();
    }

    Choice = prompt("What is your move?");
    FullChoice.toUpperCase();

    ComputerChoice = Math.floor(Math.random() * 3);

    switch (FullChoice) {
        case "ROCK":
            UserChoice = 0;
            break;
        case "PAPER":
            UserChoice = 1;
            break;
        case "SCISSORS":
            UserChoice = 2;
            break;
    }

}

function Out() {
    Winner = UserScore > ComputerScore ? "User" : "Computer";
    if (UserScore == ComputerScore)
    {
        Winner = "Tie";
    }
    window.alert("The ", Winner, " Won! ", UserScore, " : ", ComputerScore);
}

function Main() {
    while (true)
    {
        

        if (prompt("Continue?") != toUpperCase("Yes"))
        {
            window.alert("Thank you for Playing!");
            return;
        }
    }
}

const displayName = varToString({ someVar })
console.log(displayName)