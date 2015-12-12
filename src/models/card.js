/**
 * Represents a card which has a suit and a rank.
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
      // The card's suit can only be known by the specifications of the owner deck
      if (this._ownerDeck == null) return null;

      this._suit = Math.floor(this._id / this._ownerDeck.cardRankTypes);
    }

    return this._suit;
  }

  /**
   * Gets the rank type of the card.
   * @type {?number}
   */
  get rank() {
    if (this._rank == null) {
      // The card's rank can only be known by the specifications of the owner deck
      if (this._ownerDeck == null) return null;

      this._rank = this._id % this._ownerDeck.cardRankTypes;
    }

    return this._rank;
  }

  /**
   * Gets whether the card is shown on the table of its owner round.
   * @type {?boolean}
   */
  get isShownOnTable() {
    // The card's status can only be known by the specifications of the owner round
    if (this._ownerRound == null) return null;

    return this._ownerRound.cardsOnTable.indexOf(this) >= 0;
  }

  /**
   * @private
   * @param {number} id
   * @param {?Deck} ownerDeck
   * @param {?Round} ownerRound
   */
  constructor(id, ownerDeck = null, ownerRound = null) {
    this._id = id;
    this._ownerDeck = ownerDeck;
    this._ownerRound = ownerRound;
  }
}
