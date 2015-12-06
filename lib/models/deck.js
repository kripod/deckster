/**
 * Represents a set of cards which holds all the available card types of a deck.
 */
export default class Deck {
  /**
   * Gets the amount of all the available card types in the deck.
   * @type {number}
   */
  get cardTypes() {
    return this._cardSuitTypes * this._cardNumberTypes;
  }

  /**
   * Gets the amount of different card suit types in the deck.
   * @type {number}
   */
  get cardSuitTypes() {
    return this._cardSuitTypes;
  }

  /**
   * Gets the amount of different card number types in the deck.
   * @type {number}
   */
  get cardNumberTypes() {
    return this._cardNumberTypes;
  }

  /**
   * Creates a new card deck with a specific amount of cards available.
   * @param {number} cardSuitTypes The amount of different card suit types in the deck.
   * @param {number} cardNumberTypes The amount of different card number types in the deck.
   */
  constructor(cardSuitTypes, cardNumberTypes) {
    this._cardSuitTypes = cardSuitTypes;
    this._cardNumberTypes = cardNumberTypes;
  }
}
