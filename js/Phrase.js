/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
    constructor(phrase) {
        this.phrase = phrase.toLowerCase();
    }
    addPhraseToDisplay() {
        const phraseUlParent = document.getElementById('phrase');
        const ul = phraseUlParent.firstElementChild ;

        for (let i = 0; i < this.phrase.length; i++){
            const letter = document.createElement('li');
            if(this.phrase[i] === ' '){
                letter.classList.add('space');
            }else{
                letter.classList.add('letter');
                letter.classList.add(`${this.phrase[i]}`);
                letter.classList.add('hide');
                letter.textContent = this.phrase[i];
            }
            ul.appendChild(letter);
        }
    };
}