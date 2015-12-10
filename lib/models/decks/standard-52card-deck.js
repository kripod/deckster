import Deck from './../deck';

/**
 * Represents a set of cards which holds all the available card types of the standard 52-card deck.
 */
export default class Standard52CardDeck extends Deck {
  /**
   * Creates a new card deck with the cards of the standard 52-card deck.
   */
  constructor() {
    super(4, 13);
  }

  /**
   * Gets the name of a card.
   * @param {Card} card A card of this deck.
   * @param {boolean} isShort Determines whether the name returned should be short or long.
   * @returns {string}
   */
  getCardName(card, isShort = true) {
    if (isShort) {
      let suitNames = {
        0: 'c',
        1: 'd',
        2: 'h',
        3: 's'
      };

      let rankNames = {
        9: 'J',
        10: 'Q',
        11: 'K',
        12: 'A'
      };

      let rank = card.rank;
      return (rank < 9 ? rank + 2 : rankNames[rank]) + suitNames[card.suit];

    } else {
      let suitNames = {
        0: 'Clubs',
        1: 'Diamonds',
        2: 'Hearts',
        3: 'Spades'
      };

      let rankNames = {
        0: 'Two',
        1: 'Three',
        2: 'Four',
        3: 'Five',
        4: 'Six',
        5: 'Seven',
        6: 'Eight',
        7: 'Nine',
        8: 'Ten',
        9: 'Jack',
        10: 'Queen',
        11: 'King',
        12: 'Ace'
      };

      return rankNames[card.rank] + ' of ' + suitNames[card.suit];
    }
  }
}
