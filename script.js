let random = parseInt(Math.random() * 100 + 1);
const userInput = document.querySelector('#guessField');
const submit = document.querySelector('#subt');
const lowOrHi = document.querySelector('.lowOrHi');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const startOver = document.querySelector('.resultParas');
const p = document.createElement('p');
let prevGuess = [];
let numGuess = 0;
const remainingguess = 10 - numGuess;
let playgame = true;
if (playgame) {
    submit.addEventListener('click', function (e) {
        e.preventDefault();
        const guess = parseInt(userInput.value);
        validateGuess(guess);
    });
}
function validateGuess(guess) {
    if (isNaN(guess)) alert(`please enter the valid number`);
    else if (guess < 1) alert(`Enter  the  number greater than 0 `);
    else if (guess > 100) alert(`please enter the number less than 100`);
    else {
        prevGuess.push(guess);
        if (numGuess === 10) {
            displayMessage(`Game Over !!`);
            endgame();
        } else {
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}
function checkGuess(guess) {
    if (guess === random) {
        displayMessage(`You guessed it right the number was ${random}`);
        endgame();
    } else if (guess < random) displayMessage(`Number is too low `);
    else displayMessage(`Number is high`);
}
function displayGuess(guess) {
    userInput.value = '';
    guessSlot.innerHTML += `${guess}  `;
    numGuess++;
    remaining.innerHTML = `${10 - numGuess}`;
}
function displayMessage(message) {
    lowOrHi.innerHTML = `<h2>${message}</h2>`;
}
function endgame() {
    userInput.value = '';
    userInput.setAttribute('disabled', '');
    p.classList.add('button');
    p.innerHTML = '<button id="newGame">Start New Game</button>';

    startOver.appendChild(p);
    playgame = false;
    newGame();
}
function newGame() {
    const newgamebutton = document.querySelector('#newGame');
    newgamebutton.addEventListener('click', function (e) {
        random = parseInt(Math.random() * 100 + 1);
        prevGuess = [];
        numGuess = 0;
        guessSlot.innerHTML = '';
        remaining.innerHTML = '10';
        lowOrHi.innerHTML = '';
        userInput.removeAttribute('disabled');
        startOver.removeChild(p);
        playgame = true;
    });
}
