
  
    var computerChoices = ["a","b","c","d","e","f","g","h","i","j","i","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

    
    var wins = 0;
    var losses = 0;
    var guessesLeft= 5;
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    var guessesSoFar = []
    
    document.onkeyup = function(event) {
        console.log (guessesLeft);

      var userChoiceText = document.getElementById("userchoice-text");
      var computerChoiceText = document.getElementById("computerchoice-text");
      var winsText = document.getElementById("wins-text");
      var lossesText = document.getElementById("losses-text");  
      var guessesText = document.getElementById("guessesLeft-text");
     
       var userGuess = event.key;
          guessesSoFar.push(userGuess);
          console.log (guessesSoFar);
          guessesLeft -=1;
      
          if (userGuess === computerGuess) 

            { 
              wins+=1;
          
          } else if (guessesLeft === 0)
             { 
               losses+=0;
               alert("To play again, hit any button")
               guessesSoFar = [];
               guessesLeft=5;
               
          }

          computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
               
              
            
              console.log(guessesLeft);

            
        
              
        userChoiceText.textContent = "You picked " + userGuess;
        computerChoiceText.textContent = "Computer picked " + computerGuess;
        winsText.textContent = "You Won! " + wins;
        lossesText.textContent =  "You Lost! " + losses;
        guessesText.textContent =  "You have " + guessesLeft + " chances left!";
      }