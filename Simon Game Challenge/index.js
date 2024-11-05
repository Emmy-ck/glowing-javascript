// Defining a list of buttons
var buttonsList = ['green', 'red', 'yellow', 'blue'];

var computerChoice = [];
var userChoice = [];

// Defining variable to keep track of the game level
var gameLevel = 0;
var gameStart = true;

// Defining random computer button choice
var randomChoice = Math.floor(Math.random() * 4);
console.log(randomChoice);

$(document).keypress(function(){
    $("#level-title").text("Level 1");
});

computerChoice.push(buttonsList[randomChoice]);
console.log(computerChoice);

var computerButton = ("#" + buttonsList[randomChoice]);
// Function for tracking computer sequence

$(computerButton).addClass("pressed");
