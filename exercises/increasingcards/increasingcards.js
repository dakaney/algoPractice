var deckRevealedIncreasing = function(deck) {
    if (deck.length < 2) return deck;
    deck.sort((a,b) => a-b);
    let result = [];
    result.push(deck[deck.length - 2], deck[deck.length - 1]);
    for (let i = deck.length - 3; i >= 0; i--) {
        let removeFromDeck = result.pop();
        result.unshift(deck[i], removeFromDeck);
    }
    return result;
};