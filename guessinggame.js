$(document).ready(function() {
    var secretNumber = parseInt(Math.random() * 100);
    var userGuessStr = ""; 
    console.log("secretNumber = " + secretNumber);
    
    $("#submit").click(function() {
      var userGuess = parseInt($("#userGuess").val());
      if (userGuess !== secretNumber) {
        $("#message").text("Try again");
        userGuessStr += userGuess + ", ";
        $("#userGuessList").text(userGuessStr);
      } else {
        $("#message").text(userGuess + " is correct! You win");
      }
      console.log("userGuess = " + userGuess);
    });
    
    $("#hint").click(function(){
      var userGuess = parseInt($("#userGuess").val());
      if (userGuess > secretNumber) {
        $("#message").text("Try a lower number");
      } else if (userGuess < secretNumber) {
        $("#message").text("Try a higher number");
      } else {
        $("#message").text("Guess that number");
      }
    });
  });
  