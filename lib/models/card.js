export default class Card {
  get id() {
    return this._ownerGame != null ?
           this._suit * this._ownerGame.cardNumberTypes + this._number :
           null;
  }

  get suit() {
    if (this._suit == null) {
      // The card's suit can only be known by the specifications of the owner game
      if (this._ownerGame == null) return null;

      this._suit = Math.floor(this._id / this._ownerGame.cardNumberTypes);
    }

    return this._suit;
  }

  get number() {
    if (this._number == null) {
      // The card's number can only be known by the specifications of the owner game
      if (this._ownerGame == null) return null;

      this._number = this._id % this._ownerGame.cardNumberTypes;
    }

    return this._number;
  }

  get isShownOnTable() {
    // The card's status can only be known by the specifications of the owner round
    if (this._ownerRound == null) return null;

    return this._ownerRound.cardsShownOnTable.indexOf(this) >= 0;
  }

  constructor(id, ownerGame = null, ownerRound = null) {
    this._id = id;
    this._ownerGame = ownerGame;
    this._ownerRound = ownerRound;
  }
}
