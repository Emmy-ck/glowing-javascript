// document.querySelector("button").addEventListener("click", changeLetter);

// function changeLetter() {
//     document.querySelector("button").innerHTML = "K";
// }

// Adding event listeners to all buttons:

var buttonsList = document.getElementsByTagName("button");

for (let i = 0; i < buttonsList.length; i++) { // Using anonymous function call for the event listener (function without a name)
    document.querySelectorAll("button")[i].addEventListener("click", function () {

        var buttonsInnerHTML = this.innerHTML;
        playSound(buttonsInnerHTML);
        animateButton(buttonsInnerHTML);

}); 
}

// var audio = new Audio('./sounds/crash.mp3');

// document.querySelector("button").addEventListener("click", function() {
//     audio.play();
// });
// Detect keyboard press
document.addEventListener("keypress", function(event) {
    playSound(event.key);
    animateButton(event.key);
});

// Keypress function to play sounds when a key is pressed

function playSound(key) {
    switch (key) {
        case 'w':
            var tom1 = new Audio('./sounds/tom-1.mp3');
            tom1.play();
            break;
        case 'a':
            var tom2 = new Audio('./sounds/tom-2.mp3');;
            tom2.play();
            break;
        case 's':
            var tom3 = new Audio('./sounds/tom-3.mp3');
            tom3.play();
            break;
        case 'd':
            var tom4 = new Audio('./sounds/tom-4.mp3');
            tom4.play();
            break;
        case 'j':
            var snare = new Audio('./sounds/snare.mp3');
            snare.play();
            break;
        case 'k':
            var crash = new Audio('./sounds/crash.mp3');
            crash.play();
            break;
        case "l":
            var kickBass = new Audio('./sounds/kick-bass.mp3');
            kickBass.play();
            break;
        default: console.log(buttonsInnerHTML);
    }
}

function animateButton(currentKey) {
    var activeKey = document.querySelector("." + currentKey)
    activeKey.classList.add("animateclass");

    setTimeout(function() {
        activeKey.classList.remove("animateclass");
    }, 100); // Removes the animation after a wait of 100ms(0.1 seconds)
}
