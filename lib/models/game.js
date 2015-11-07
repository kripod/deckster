import Round from './round';

export default class Game {
  get cardTypes() {
    return this._cardSuitTypes * this._cardNumberTypes;
  }

  get cardSuitTypes() {
    return this._cardSuitTypes;
  }

  get cardNumberTypes() {
    return this._cardNumberTypes;
  }

  constructor(cardSuitTypes, cardNumberTypes) {
    this._cardSuitTypes = cardSuitTypes;
    this._cardNumberTypes = cardNumberTypes;
  }

  createRound(players) {
    return new Round(this, players);
  }
}
