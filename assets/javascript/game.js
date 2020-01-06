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
  var guessesSoFarText = document.getElementById("guessesSoFar-text");

  var userGuess = event.key;
  guessesSoFar.push(userGuess);
  document.getElementById(userGuess);
  guessesLeft -=1;

  if (userGuess === computerGuess)
  {
    wins++;
    guessesLeft=0;
  } else if(guessesLeft === 0 && userGuess !== computerGuess) {
    losses++;
  }

  if (guessesLeft === 0) {
    userChoiceText.textContent = "You picked " + userGuess;
    computerChoiceText.textContent = "Computer picked " + computerGuess;
    guessesSoFar = [];
    guessesLeft=5;
    userGuess='';
    computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    alert("To play again, hit any button")
  } else {
    computerChoiceText.textContent = "Computer picked " + "";
    userChoiceText.textContent = "You picked " + userGuess;
  }

    winsText.textContent = "You Won! " + wins;
    lossesText.textContent =  "You Lost! " + losses;
    guessesText.textContent =  "You have " + guessesLeft + " chances left!";
    guessesSoFarText.textContent = "your guesses so far " + guessesSoFar;
}
