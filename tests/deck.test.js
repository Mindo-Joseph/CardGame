import Deck from '../src/deck.mjs';

describe('Deck', () => {
    test('produces a shuffled set of cards', () => {
        const deck = new Deck();
        const cards = deck.cards;
        const shuffled = deck.shuffle();
        expect(shuffled).toEqual(cards);
        expect(shuffled).not.toBe(cards);
    })
});