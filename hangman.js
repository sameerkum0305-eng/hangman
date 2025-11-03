var POSSIBLE_WORDS = ["obdurate", "verisimilitude", 
"defenestrate", "obsequious", "dissonant", "toady", "idempotent"];

var MAX_GUESSES = 6;
var word = "";
var guesses = "";
var guess_count = MAX_GUESSES;
var game_over = false; //Initializing Feature 1 with variable game_over

function newGame() {
  var randomIndex = parseInt(Math.random() * POSSIBLE_WORDS.length);
  word = POSSIBLE_WORDS[randomIndex];
  console.log(`Word chosen was: ${word}`);
  guesses = "";
  guess_count = MAX_GUESSES;
  game_over = false; //game resets
  document.getElementById("guess").disabled = false; // enable typing for new game start!

  updatePage();
}

function guessLetter() {
  var input = document.getElementById("guess");
  var letter = input.value;

  if (word === "") {   //Feature 4 -- don't allow guesses before word is chosen.
    var guessArea = document.getElementById("guesses");
    guessArea.innerHTML = "Click New Game to start!";
    return;
  }

  if (game_over) {  //Feature 2 -- Guessing not allowed once game is over.
    var guessArea = document.getElementById("guesses");
    guessArea.innerHTML = "Game over. Click New Game to play again.";
    return;
  }

  if (letter === "") { 
    return; 
  }

  if (guesses.indexOf(letter) >= 0) {  //Feature 5 -- you can't guess the same letter twice.
    var guessArea = document.getElementById("guesses");
    guessArea.innerHTML = "Already guessed: " + guesses;
    input.value = ""; 
    return;
  }

  if (word.indexOf(letter) < 0) {
    console.log('Incorrect guess!');
    guess_count--;
  }

  console.log(`Current GuessCount: ${guess_count}`);
  guesses += letter;
  updatePage();
  input.value = ""; //Feature 3 -- Add a clear to the input field on a guess
}

function updatePage() {
  var clueString = "";
  for (var i = 0; i < word.length; i++) {
    var currentLetter = word.charAt(i);
    if (guesses.indexOf(currentLetter) >= 0) { // You guessed it
      clueString += currentLetter + " ";
    } else {
      clueString += "_ ";
    }
  }

  var clue = document.getElementById("clue");
  clue.innerHTML = clueString;

  var guessArea = document.getElementById("guesses");
  guessArea.innerHTML = "Guessed Letters: " + guesses;

  var image = document.getElementById("hangmanImage");
  image.src = "images/hangman" + guess_count + ".gif";

  if (clueString.indexOf("_") < 0) { //Feature 1 -- Dialog for winning and losing -> guesses area. 
    game_over = true;
    guessArea.innerHTML = "You win!!! Word was: " + word + ". Click New Game to play Hangman again.";
    input.disabled = true; 
  } 
  else if (guess_count <= 0) {
    game_over = true;
    guessArea.innerHTML = "Sorry. You lose! :-( Word was: " + word + ". Click New Game to play Hangman again.";
    input.disabled = true; 
  }
}
