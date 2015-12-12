import Round from './round';

/**
 * Represents a game with a specific set of cards available.
 */
export default class Game {
  /**
   * Gets the card deck used for the game.
   * @type {Deck}
   */
  get deck() {
    return this._deck;
  }

  /**
   * @private
   * @param {Deck} deck
   */
  constructor(deck) {
    this._deck = deck;
  }

  /**
   * Creates a new round with the players specified.
   * @param {Player[]} players The players who participate in the round.
   * @param {(string|number|number[])} deckSeed The seed used for initially shuffling the deck.
   * @returns {Round}
   */
  createRound(players, deckSeed = null) {
    return new Round(this, players, deckSeed);
  }
}
