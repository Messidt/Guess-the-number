// Creating random number - computer pick
var randomNumber = Math.floor(Math.random()*100) + 1;

console.log(randomNumber);
// Catching HTML elements
var guesses = document.querySelector('.guesses');

var lastGuess = document.querySelector('.lastGuess');
var hiLow = document.querySelector('.hiLow');

var guess = document.querySelector('.guess');

var guessSubmit = document.querySelector('.guessSubmit');

// Creating variable for number of user tries;
var tries = 1;

// Declaring a function for a new game it'll be created later on
var newGame;

// Creating function that checks if the user has any tries left and if the inputed number is equal to the random number "picked" by computer.
function checkGuess() {
  // Creating variable equal to input value (number entered by user) and using a Number() function (just to make sure that data type is really a number)
  var userGuess = Number(guess.value);
  if (tries === 1) {
    guesses.textContent = 'Previous guesses: ';
  }
  guesses.textContent += userGuess + ', ';
 
  // If user guessed correctly we congratulate him and the game ends
  if (userGuess === randomNumber) {
    lastGuess.textContent = 'Congratulations! You got it right!';
    hiLow.textContent = '';
    gameOver();
    //If he used all his chances the game is over
  } else if (tries === 5) {
    lastGuess.textContent = 'Out of tries! Game is OVER!';
    gameOver();
    // If all above is false so user must have guessed wrong number
  } else {
    lastGuess.textContent = 'Incorrect number!';
    // If guessed number was to low we display appropriate message
    if(userGuess < randomNumber) {
      hiLow.textContent = 'Last guess was too low!';
      // If guessed number was to high we also display appropriate message
    } else if(userGuess > randomNumber) {
      hiLow.textContent = 'Last guess was too high!';
    }
  }
 
  // Increasing user tries by 1
  tries++;
  // Empties the user's input
  guess.value = '';
}

// Attaching click event to Check button that triggers checkGuess function
guessSubmit.addEventListener('click', checkGuess);

// Defining function that creates new button to start over the whole game after it was won or lost
function gameOver(){
    newGame = document.createElement('button');
    newGame.textContent = "New Game";
    document.body.appendChild(newGame);
    newGame.addEventListener('click', resetGame);
    
};

// Function that resets the game after correct guess or lost game
function resetGame(){
    // Again user starts with one try
    tries = 1;
    // Reseting all output paragraphs, so there isn't any data about previous guesses
    var resetParagraphs = document.querySelectorAll('.output p');
    for (var i = 0; i < resetParagraphs.length; i++){
        resetParagraphs[i].textContent = '';
    }
    // Removing New Game button
    newGame.parentNode.removeChild(newGame);
    
    guess.value = '';
    // Creating new random number so it isn't the same as it was in earlier game
    randomNumber = Math.floor(Math.random()*100) + 1;
}