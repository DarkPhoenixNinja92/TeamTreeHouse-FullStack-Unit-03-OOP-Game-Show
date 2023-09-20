/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */


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
        const overlay = document.getElementById('overlay');
        const button = document.getElementById('btn__reset');
        
        button.addEventListener('click', () => {
            overlay.style.display = 'none';
        });
        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();
    }
}