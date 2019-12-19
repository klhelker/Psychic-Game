
  
    var computerChoices = ["a","b","c","d","e","f","g","h","i","j","i","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

    
    var wins = 0;
    var losses = 0;
    var chances= 0;
    var guessesSoFar= 5;
    
    
    var userChoiceText = document.getElementById("userchoice-text");
    var computerChoiceText = document.getElementById("computerchoice-text");
    var winsText = document.getElementById("wins-text");
    var lossesText = document.getElementById("losses-text");
    var chancesText = document.getElementById("chances-text");
    var guessesSoFar = document.getElementById("guessesSoFar-text");

    document.onkeyup = function(event) {

      
      var userGuess = event.key;
      
      var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

         for (var i = 0; i < computerChoice.length; i++){

          console.log(computerGuess);

          if ((userGuess === computerGuess)) 

          {  console.log=(wins++);
          
          } else {
              
              console.log=(losses++ && chances --);                       
          }
        
        userChoiceText.textContent = userGuess;
        computerChoiceText.textContent = computerGuess;
        winsText.textContent =  wins;
        lossesText.textContent =  losses;
        chancesText.textContent = chances;
        guessesSOFar.textContent =  guessesSoFar;

        }