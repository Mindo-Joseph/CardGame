export const SUIT = ["♠", "♥", "♣", "♦"]
export const VALUE = [
    "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"
]

export default class Card {
    constructor(suit, value) {
        this.suit = suit;
        this.value = value;
    }
    getHTML() {
    }
}