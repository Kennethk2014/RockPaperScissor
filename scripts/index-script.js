//HTML Object
const container = document.querySelector('#container');

//Creating the Intro Text & Elements
const h1Intro = document.createElement('h1');
h1Intro.classList.add('h1Intro');
h1Intro.textContent = "Rock, Paper, Scissors";
container.appendChild(h1Intro);

//Creating the content div inside the container for the buttons.
const content = document.createElement('div');
content.classList.add('content');
container.appendChild(content);

// POINT SYSTEM **
const scoreDiv = document.createElement('div');
scoreDiv.classList.add('scoreDiv');
container.appendChild(scoreDiv);

const playerScorePara = document.createElement('p');
    playerScorePara.classList.add('playerScorePara');
    playerScorePara.textContent = "Player:"
scoreDiv.appendChild(playerScorePara);


let playerScore_span = document.createElement('span');
playerScore_span.textContent = " 0";
playerScorePara.appendChild(playerScore_span);

const computerScorePara = document.createElement('p');
    computerScorePara.classList.add('computerScorePara');
    computerScorePara.textContent = "Computer:"
scoreDiv.appendChild(computerScorePara);

let computerScore_span = document.createElement('span');
computerScore_span.textContent = " 0";
computerScorePara.appendChild(computerScore_span)


/**************** ALL BUTTONS ************** */

//Creating the button for Rock value;
const rockBtn = document.createElement('input');
    rockBtn.setAttribute('type', 'button');
    rockBtn.value = "Rock";
content.appendChild(rockBtn)

//Creating the button for Paper Value
const paperBtn = document.createElement('input');
    paperBtn.setAttribute('type', 'button');
    paperBtn.value = "Paper";
content.appendChild(paperBtn);

//Creating the button for Scissors Value
const scissorsBtn = document.createElement('input');
    scissorsBtn.setAttribute('type', 'button');
    scissorsBtn.value = "Scissors";
content.appendChild(scissorsBtn);

// Getting every button 
const buttons = document.querySelectorAll('input');

// Creating text output to show what choices was made
const choiceOutput = document.createElement('h2');
    choiceOutput.classList.add('choiceOutput');
    choiceOutput.textContent = "Click a Button to Play" //Midlertidig output, endres når funksjonene aktiveres
    content.appendChild(choiceOutput);
    


// **********Player and Computer score *********** //
let playerScore = 0;
let computerScore = 0;

let getComputerChoice = () => {
    let Choices = ["Rock", "Paper", "Scissors"];   
    let randomNumber = Math.floor(Math.random() * 3);
    return Choices[randomNumber];
}

/*Increases the playerScore on WINS, and increases the computerScore on Losses*/

let win = (userChoice, computerChoice) => {
    ++playerScore
    playerScore_span.textContent = ` ${playerScore}`
    computerScore;
    choiceOutput.innerHTML = `
        ${userChoice} beats ${computerChoice}, You Win! :-D
    `     
}

let loss = (userChoice, computerChoice) => {
    ++computerScore
    computerScore_span.textContent = ` ${computerScore}`;
    choiceOutput.innerHTML = `
        ${userChoice} loses to ${computerChoice}, You Loooose! :-(
    `       
}
let draw = (userChoice, computerChoice) => {
    choiceOutput.innerHTML = `
    ${userChoice} draws to ${computerChoice}...
`       
}


/*  Function that makes the computer choose something when a button is pressed.
     This is not what makes the buttons clickable */
let gameLogic = (userChoice) => {
    let computerChoice = getComputerChoice()
    
    if(userChoice === computerChoice){
        console.log("It's a Draw!")
        draw(userChoice, computerChoice)
    }else if(userChoice === "Rock" && computerChoice === "Paper" || userChoice === "Paper" && computerChoice === "Scissors" || userChoice === "Scissors" && computerChoice === "Rock"){
        console.log("You Lost!")
        loss(userChoice, computerChoice)
    }else if(userChoice === "Rock" && computerChoice === "Scissors" || userChoice === "Paper" && computerChoice === "Rock" || userChoice === "Scissors" && computerChoice === "Paper"){
        console.log("You Win!")
        win(userChoice, computerChoice);
    }
}

gameLogic()


/* The main function which make it interactive. It make the buttons
 clickable and assignes a string value when its clicked */ 
let mainFunction = () => {
    
    rockBtn.addEventListener('click', () => {
        gameLogic("Rock");
    })

    paperBtn.addEventListener('click', () => {
        gameLogic("Paper")
    })

    scissorsBtn.addEventListener('click', () => {
        gameLogic("Scissors")
    })
}

mainFunction()