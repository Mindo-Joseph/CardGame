import Deck from "./src/deck.mjs";

let deck = new Deck();
deck.shuffle();
console.log(deck.cards);