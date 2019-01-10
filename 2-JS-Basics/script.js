// CODING CHALLENGE 1 SOLUTION:
/*
var height1 = 150;
var age1 = 50;

var height2 = 180;
var age2 = 18;

var height3 = 150;
var age3 = 50;

var score1 = height1 + (age1 * 5);
var score2 = height2 + (age2 * 5);
var score3 = height3 + (age3 * 5);

var gameOverMsg;

if (score1 > score2 && score1 > score3) {
	gameOverMsg = "The  winner is player 1.\nScore: " + score1;
} else if (score2 > score1 && score2 > score3) {
	gameOverMsg = "The  winner is player 2.\nScore: " + score2;
} else if (score3 > score2 && score3 > score1) {
	gameOverMsg = "The  winner is player 3.\nScore: " + score3;
} else {
	gameOverMsg = "We have a tie.\nPlayer 1 score: " + score1 + "\nPlayer 2 score: " + score2 + "\nPlayer 3 score: " + score3;
}

console.log(gameOverMsg);
*/

// CODING CHALLENGE 2 SOLUTION:
function printFullAge (years) {
    "use strict";

    var ages = [];
    var fullAgeResults = [];

    for (var i = 0; i < years.length; i++) {
        ages.push(2017 - years[i]);
    }

    var j = 0;
    while (j < ages.length) {
        var logMsg = "";
        if (ages[j] > 17) {
            logMsg = " is an adult.";
            fullAgeResults.push(true);
        } else {
            logMsg = " is not an adult.";
            fullAgeResults.push(false);
        }
        console.log("\nThe person born in " + years[j] + logMsg + " Age " + ages[j]);
        j++;
    }

    return fullAgeResults;
}

function printFullAgeResults(inputNumber, input, results) {
    "use strict";
    console.log("\nResults for input " + inputNumber + " (" + input.toString() + "): " + results.toString());
}

var input_1 = [1965, 2008, 1992];
var input_2 = [1994, 1997, 2002];
var full_1 = printFullAge(input_1);
var full_2 = printFullAge(input_2);

printFullAgeResults(1, input_1, full_1);
printFullAgeResults(2, input_2, full_2);