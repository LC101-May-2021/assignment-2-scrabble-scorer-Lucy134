// inspired by https://exercism.io/tracks/javascript/exercises/etl/solutions/91f99a3cca9548cebe5975d7ebca6a85

const input = require("readline-sync");

const oldPointStructure = {
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z']
};
const vowels = ['A', 'E', 'I', 'O', 'U', 'Y'];



// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //

function initialPrompt() {
  console.log("Let's play some scrabble! \n");
  let word = input.question("Enter a word to score: " );
  
  let choice = scorerPrompt();
  scoringAlgorithms[choice].scoreFunction(word);

};
let simpleScore = {name: "Simple Score",
  description: "Each letter is worth 1 point.",
  scoreFunction: function (word) {
  word = word.toUpperCase();
  let score = word.length;
  console.log(`Total score for ${word}: ${score}`);
  
  return score;
}
};
let vowelBonusScore = {
  name: "Bonus Vowels",
  description: "Vowels are 3 pts, consonants are 1 pt.",
  scoreFunction: function (word) {
  word = word.toUpperCase();
  
  let score = 0;
  for (let i = 0; i < word.length; i++) {
    
    if (vowels.includes(word[i])) {
      score += 3;
      
    }
    else {
      score += 1;
      
    }
    
  } console.log(`Total score for ${word}: ${score}`);
  return score;
}

};

let scrabbleScore = {
  name: "Scrabble",
  description: "The traditional scoring algorithm.",
  scoreFunction: function(word){
  word = word.toLowerCase();
  //letterPoints = "";
  scoreTot = "";
  let score = 0;
  newPointStructure =transform(oldPointStructure);
  for(let i = 0; i < word.length; i++){
    score += newPointStructure[word[i]];
    //letterPoints +=`Points for '${word[i]}': ${newPointStructure[word[i]]} \n`;
  } console.log(`Total score for '${word}': ${score}`);
  return score;
}
};

function oldScrabbleScorer(word) {
  word = word.toUpperCase();
  let letterPoints = "";

  for (let i = 0; i < word.length; i++) {

    for (const pointValue in oldPointStructure) {

      if (oldPointStructure[pointValue].includes(word[i])) {
        letterPoints += `Points for '${word[i]}': ${pointValue}\n`
      }

    }
  }
  return letterPoints;
}
const scoringAlgorithms = [simpleScore, vowelBonusScore, scrabbleScore];

function scorerPrompt() {
  console.log("\nWhich scoring algorithm would you like to use?\n 0 - Simple: One point per character \n 1 - Vowel Bonus: Vowels are worth 3 points \n 2 - Scrabble: Uses scrabble point system \n");
let choice = input.question("Enter 0, 1, or 2: ");
choice = Number(choice);
return choice;

}

function transform(object) {
  let letterArray = [];
  let points;
  for (item in object){
    letterArray = object[item];
    pointValue = Number(item);
    for (i = 0; i < letterArray.length; i++){
      newPointStructure[letterArray[i].toLowerCase()] = pointValue;
    }
  }return newPointStructure;
   }


let newPointStructure = {};

function runProgram() {
  initialPrompt();

}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  initialPrompt: initialPrompt,
  transform: transform,
  oldPointStructure: oldPointStructure,
  simpleScore: simpleScore,
  vowelBonusScore: vowelBonusScore,
  scrabbleScore: scrabbleScore,
  scoringAlgorithms: scoringAlgorithms,
  newPointStructure: newPointStructure,
  runProgram: runProgram,
  scorerPrompt: scorerPrompt
};

