var POSSIBLE_WORDS = {"obdurate", "verisimlitude", 
"defenestrate", "obsequious", "dissonant", "toady", "idempotent"};

var randomIndex = parseInt(Math.random() = POSSIBLE_WORDS.length);
var POSSIBLE_WORDS = ["obdurate", "verisimilitude", "defenestrate", "obsequious", "dissonant", "toady", "idempotent"];
var MAX_GUESSES = 6;
var word = "";
var guesses = "";
var guess_count = MAX_GUESSES;

function newGame() {
  var randomIndex = parseInt(Math.random() * POSSIBLE_WORDS.length);
  word = POSSIBLE_WORDS[randomIndex];
  console.log(`Word chosen was: ${word}`);
  guesses = "";
  guess_count = MAX_GUESSES;
  updatePage();
}

function guessLetter() {
  var input = document.getElementById("guess");
  var letter = input.value;
  if (letter === "") { return; }

  if (word.indexOf(letter) < 0) {
    console.log('Incorrect guess!');
    guess_count--;
  }
  console.log(`Current GuessCount: ${guess_count}`);
  guesses += letter;
  updatePage();
  input.value = "";
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
}
