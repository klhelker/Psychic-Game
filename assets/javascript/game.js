
  
    var computerChoices = ["a","b","c","d","e","f","g","h","i","j","i","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

    
    var wins = 0;
    var losses = 0;
    var guessesSoFar= 5;
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

    document.onkeyup = function(event) {

      var userChoiceText = document.getElementById("userchoice-text");
      var computerChoiceText = document.getElementById("computerchoice-text");
      var winsText = document.getElementById("wins-text");
      var lossesText = document.getElementById("losses-text");  
      var guessesText = document.getElementById("guessesSoFar-text");
  
      var userGuess = event.key;
         
          if (userGuess === computerGuess) 

            { 
              wins++;
          
          } else if (guessesSoFar === 0)
             { 
               losses ++;
          }

              else {
                guessesSoFar --;
          }

            

              console.log(guessesSoFar);
        userChoiceText.textContent = "You picked " + userGuess;
        computerChoiceText.textContent = "Computer picked " + computerGuess;
        winsText.textContent = "You Won! " + wins;
        lossesText.textContent =  "You Lost! " + losses;
        guessesText.textContent =  "You have " + guessesSoFar + " left";
          }

