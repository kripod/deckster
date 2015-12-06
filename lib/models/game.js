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
   * @param {string} talonSeed The seed used for shuffling the talon initially.
   * @returns {Round}
   */
  createRound(players, talonSeed = null) {
    return new Round(this, players, talonSeed);
  }
}
