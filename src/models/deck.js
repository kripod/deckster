/**
 * Represents a set of cards which holds all the available card types of a deck.
 */
export default class Deck {
  /**
   * Gets the amount of all the available card types in the deck.
   * @type {number}
   */
  get cardTypes() {
    return this._cardSuitTypes * this._cardRankTypes;
  }

  /**
   * Gets the amount of different card suit types in the deck.
   * @type {number}
   */
  get cardSuitTypes() {
    return this._cardSuitTypes;
  }

  /**
   * Gets the amount of different card rank types in the deck.
   * @type {number}
   */
  get cardRankTypes() {
    return this._cardRankTypes;
  }

  /**
   * Creates a new card deck with a specific amount of cards available.
   * @param {number} cardSuitTypes The amount of different card suit types in the deck.
   * @param {number} cardRankTypes The amount of different card rank types in the deck.
   */
  constructor(cardSuitTypes, cardRankTypes) {
    this._cardSuitTypes = cardSuitTypes;
    this._cardRankTypes = cardRankTypes;
  }
}
