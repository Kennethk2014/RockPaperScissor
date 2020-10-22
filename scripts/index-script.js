        /*
        When either rock paper or scissor is pressed by the user,
        The computer choice should also be randomised.
        if the same value, then it should return a draw

        ****USER ROCK OUTFALL****
        if user Rock VS computer Scissor, should return User won, rock beats scissors
        if user Rock Vs computer Paper, should return Computer won, paper beats rock
        if user rock vs computer rock, should return draw
        ****USER PAPER OUTFALL****
        if user Paper VS computer Scissor, should return Computer won, Scissor beats rock
        if user Paper VS computer Rock, should return user won, Paper beats Rock.
        if user Paper VS computer Paper, shold return draw.
        ****USER SCISSOR OUTFALL****
        if user Scissor VS computer Rock, should return Computer won, rock beats scissors
        if user Scissor VS computer Paper, should return user won, Scissor beats paper
        if user Scissor VS computer Scissors, should return draw.

        */
       
        //HTML OBJECTS
        let rockImg = document.getElementById("rock-option")
        let scissorImg = document.getElementById("scissors-option")
        let paperImg = document.getElementById("paper-option")
        let winsCounter = document.getElementById("wins-counter")
        let lossCounter = document.getElementById("loss-counter")


       
        let playerSelection;
    
        rockImg.value = "rock";
        paperImg.value = "paper";
        scissorImg.value= "scissors";
        

        //Create random choice for computer every time page reloads or function is called on
        function computerPlay(){
            let computerRPS = ["rock", "paper", "scissors"];
            let randCompAnswr = computerRPS[Math.floor(Math.random() * 3)];
            return randCompAnswr;
        }

        //Playing agains computer one time.
        function playRound(playerSelection, computerSelection){
            
            if(playerSelection === computerSelection){
                console.log("You just Tied to a bot!")
            }else if((playerSelection == "rock" && computerSelection == "scissors") || (playerSelection == "paper" && computerSelection == "rock") || (playerSelection == "scissors" && computerSelection == "paper")){
                console.log("Amazing, you just crushed the bot!")
            }else{
                console.log("You lost! Daaamn ,try again.")
            }
        }

        function game(){
            for(let i = 0; i <= 5; i++){
            let computerSelection = computerPlay();
            let playerRPS= prompt("Help us defeat the boss, we need you to pick Rock, Paper or Scissors");
            let playerSelection = playerRPS.toLowerCase();
            console.log(playRound(playerSelection, computerSelection));			
            }   
        }
    
        game()