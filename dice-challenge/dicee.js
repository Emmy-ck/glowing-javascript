// function diceRolling() {
//     var numberRolled = Math.random() * 6;
//     console.log(numberRolled);
// }

// document.getElementsByTagName("img")[0].setAttribute("src", "./images/dice6.png");

var player1Choice = Math.floor(Math.random() * 6) + 1;
console.log("Player 1 picked: " + player1Choice);
var player2Choice = Math.floor(Math.random() * 6) + 1;
console.log("Player 2 picked: " + player2Choice);

if (player1Choice > player2Choice) {
    document.querySelector("h2").innerHTML = "Player 1 wins!";
} else if (player2Choice > player1Choice) {
    document.querySelector("h2").innerHTML = "Player 2 wins!";
} else {
    document.querySelector("h2").innerHTML = "Draw!";
}

// var firstChoice = document.getElementsByClassName("img1");
// var secondChoice = document.getElementsByClassName("img2");

if (player1Choice === 1) {
    document.getElementsByTagName("img")[0].setAttribute("src", "./images/dice1.png");
} else if (player1Choice === 2){
    document.getElementsByTagName("img")[0].setAttribute("src", "./images/dice2.png");
} else if (player1Choice === 3) {
    document.getElementsByTagName("img")[0].setAttribute("src", "./images/dice3.png");
} else if (player1Choice === 4) {
    document.getElementsByTagName("img")[0].setAttribute("src", "./images/dice4.png");
} else if (player1Choice === 5) {
    document.getElementsByTagName("img")[0].setAttribute("src", "./images/dice5.png");
} else {
    document.getElementsByTagName("img")[0].setAttribute("src", "./images/dice6.png");
}

if (player2Choice === 1) {
    document.getElementsByTagName("img")[1].setAttribute("src", "./images/dice1.png");
} else if (player2Choice === 2){
    document.getElementsByTagName("img")[1].setAttribute("src", "./images/dice2.png");
} else if (player2Choice === 3) {
    document.getElementsByTagName("img")[1].setAttribute("src", "./images/dice3.png");
} else if (player2Choice === 4) {
    document.getElementsByTagName("img")[1].setAttribute("src", "./images/dice4.png");
} else if (player2Choice === 5) {
    document.getElementsByTagName("img")[1].setAttribute("src", "./images/dice5.png");
} else {
    document.getElementsByTagName("img")[1].setAttribute("src", "./images/dice6.png");
}