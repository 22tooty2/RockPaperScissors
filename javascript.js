let Rounds = 0;

let UserScore = 0;
let ComputerScore = 0;

let Choice = "";
let FullChoice = "";
let UserChoice = 0;
let ComputerChoice = 0;

let Winner = "";

let Result = 0; //0 - TIE, 1 - USER WON, 2 - COMPUTER WON

function playRound() {
    console.log("New Round!");
    window.alert("New Round!");
    Rounds++;

    window.alert("Scores: " + UserScore + " " + ComputerScore);

    Choice = prompt("What is your move?");
    FullChoice = Choice.toUpperCase();

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
        default:
            window.alert("NOT DETECTED, COMPUTER WINS THIS ROUND.");
    }

    alert("You Chose " + Choice);
    
    var computerChoiceString = "";
    if (ComputerChoice == 0)
        computerChoiceString = "Rock";
    else if (ComputerChoice == 1)
        computerChoiceString = "Paper";
    else
        computerChoiceString = "Scissors";


    alert("The Computer Chose " + computerChoiceString);

    if (UserChoice == ComputerChoice)
    {
        alert("TIE!");
        return;
    }
    if (UserChoice > ComputerChoice && ComputerChoice != 0)
    {
        UserScore++;
        alert("You Won The Round!");
    }
    else if (ComputerChoice > UserChoice && UserChoice != 0)
    {
        ComputerScore++;
        alert("The Computer Won The Round!");
    }
    else if (UserChoice == 0)
    {
        UserScore++;
        alert("You Won The Round!");
    }
    else
    {
        ComputerScore++;
        alert("The Computer Won The Round!");
    }
}

function CheckWinner() {
    if (UserScore >= 3 || ComputerScore >= 3)
    {
        Out();
    }
}

function Out() {
    Winner = UserScore > ComputerScore ? "User" : "Computer";
    if (UserScore == ComputerScore)
    {
        Winner = "Tie";
    }
    window.alert("The " + Winner + " Won! " + UserScore + " : " + ComputerScore);
}

function Main() {
    window.alert("Welcome to Rock Paper Scissors!");

    while (true)
    {
        while (Rounds < 5)
        {
            playRound();
            Rounds++;
            CheckWinner();
        }

        if (prompt("Continue?").toUpperCase() != "YES")
        {
            window.alert("Thank you for Playing!");
            return;
        }

        Rounds = 0;
        UserScore = 0;
        ComputerScore = 0;
    }

    window.alert("Bye Bye!");
}

Main();