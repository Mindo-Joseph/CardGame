import { SUIT, VALUE } from "./card.mjs";
import Card from "./card.mjs";
export default class Deck {
    constructor(cards = freshDeck()) {
        this.cards = cards;
    }
    get numberOfCards() {
        return this.cards.length;
    }
    shuffle(){
        for (let i = this.numberOfCards - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
        }
    }

}
function freshDeck() {
    return SUIT.flatMap(suit => {
        return VALUE.map(value => {
            return new Card(suit, value);
        });
    })

}

console.log(SUIT, VALUE);