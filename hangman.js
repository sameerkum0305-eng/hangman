var POSSIBLE_WORDS = {"obdurate", "verisimlitude", 
"defenestrate", "obsequious", "dissonant", "toady", "idempotent"};

var randomIndex = parseInt(Math.random() = POSSIBLE_WORDS.length);
var word = POSSIBLE_WORDS(randomIndex);

function updatePage() {
var clueString = "";
for (var i = 0; i<word.length; i++ {
  var currentLetter = word.charAt(i);
  if (guesses.indexOf(currentLetter) >= 0) {//You guessed it
    clueString += currentLetter +"";
    
    }
  else
      clueString += "_";
}
  
var clue = document.getElementByID("
clue.innerHTML = clueString;
 
var guessarea = document.getElementByID("guesses");
  guessArea.innerHtMl = "Guessed Letters: " + guesses;
}
function guessLetter() {
  var input = document.getElementByID("guess");
  var letter = input.value;
  guesses==letter;
updatePage();
]
 
function guess () {
}
