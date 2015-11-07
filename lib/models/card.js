/**
 * Represents a card which has a suit and a number.
 */
export default class Card {
  /**
   * Gets the ID of the card.
   * @type {number}
   */
  get id() {
    return this._id;
  }

  /**
   * Gets the suit type of the card.
   * @type {?number}
   */
  get suit() {
    if (this._suit == null) {
      // The card's suit can only be known by the specifications of the owner game
      if (this._ownerGame == null) return null;

      this._suit = Math.floor(this._id / this._ownerGame.cardNumberTypes);
    }

    return this._suit;
  }

  /**
   * Gets the number type of the card.
   * @type {?number}
   */
  get number() {
    if (this._number == null) {
      // The card's number can only be known by the specifications of the owner game
      if (this._ownerGame == null) return null;

      this._number = this._id % this._ownerGame.cardNumberTypes;
    }

    return this._number;
  }

  /**
   * Gets whether the card is shown on the table of its owner round.
   * @type {?boolean}
   */
  get isShownOnTable() {
    // The card's status can only be known by the specifications of the owner round
    if (this._ownerRound == null) return null;

    return this._ownerRound.cardsShownOnTable.indexOf(this) >= 0;
  }

  /**
   * @private
   * @param {number} id
   * @param {?Game} ownerGame
   * @param {?Round} ownerRound
   */
  constructor(id, ownerGame = null, ownerRound = null) {
    this._id = id;
    this._ownerGame = ownerGame;
    this._ownerRound = ownerRound;
  }
}
