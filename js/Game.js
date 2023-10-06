/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */
const overlay = document.getElementById('overlay');
const button = document.getElementById('btn__reset');
const overlayTxt = document.getElementById('game-over-message');

class Game {
    constructor() {
    this.missed = 0;
    this.phrases = [
        new Phrase("Beauty is in the eye of the beholder"),
        new Phrase("Spill the beans"),
        new Phrase("Break a leg"),
        new Phrase("As right as rain"),
        new Phrase("Once in a blue moon")
    ];
    this.activePhrase = null;
    }
    getRandomPhrase() {
        const indexRand = Math.floor(Math.random() * this.phrases.length);
        const phraseRand = this.phrases[indexRand];
        return phraseRand;
    };
    startGame() {
        overlayTxt.textContent= '';
        button.textContent = 'Start Game';
        overlay.style.alignItems = 'initial';
        overlay.style.justifyContent = 'initial';
        overlay.classList.remove('lose');
        button.addEventListener('click', () => {
            overlay.style.display = 'none';
        });
        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();
    }
    handleInteraction() {
        const qwerty = document.getElementById('qwerty');
        qwerty.addEventListener('click', (clicked) => {
            if(clicked.target.tagName === 'BUTTON') {
                const targetVal = clicked.target;
                targetVal.disabled = true;
                targetVal.classList.add('chosen');
            }
        });
    }
    checkForWin() {

    }
    removeLife() {

    }
    gameOver() {
        overlay.style.display = 'flex';
        overlay.style.alignItems = 'center';
        overlay.style.justifyContent = 'center';
        overlayTxt.textContent = 'Game Over';
        overlay.classList.add('lose');
        button.textContent = 'Play Again';
    }
}