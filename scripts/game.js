// the game part
var winMessage = "You got it!";
var loseMessage = "Gotta Try Again =(";
var wordsSolved = 0;
var lastWord = -1;

function getRandomWord() {
  var word = Math.floor(Math.random() * words.length);

  // don't repeat words
  if (word === lastWord && words.length > 1) {
    return getRandomWord();
  }

  var selectWord = words[word];

  // make the second word easy
  if (selectWord.length > 6) {
    return getRandomWord();
  }

  return words[word];
}

function randomize(str) {
  // first make keys unique
  var fixWord = [];
  for (var i = 0; i < str.length; i++) {
    if (fixWord.indexOf(str[i]) === -1) {
      fixWord.push(str[i]);
    }
  }

  // random sort doesn't happen until a few word in
  // unless there are no repeats and this would be dumb
  if (fixWord.length === str.length || wordsSolved >= 3) {
    fixWord.sort(function() {
      return Math.random() - 0.5;
    });
  }

  var selectOrder = fixWord.join("");

  // make sure the random sort isn't too easy
  if (selectOrder === str) {
    return randomize(str);
  }

  return selectOrder;
}
