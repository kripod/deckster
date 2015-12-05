import Round from './round';

/**
 * Represents a game with a specific set of cards available.
 */
export default class Game {
  /**
   * Gets the amount of all the available card types.
   * @type {number}
   */
  get cardTypes() {
    return this._cardSuitTypes * this._cardNumberTypes;
  }

  /**
   * Gets the amount of the different card suit types.
   * @type {number}
   */
  get cardSuitTypes() {
    return this._cardSuitTypes;
  }

  /**
   * Gets the amount of the different card number types.
   * @type {number}
   */
  get cardNumberTypes() {
    return this._cardNumberTypes;
  }

  /**
   * @private
   * @param {number} cardSuitTypes
   * @param {number} cardNumberTypes
   */
  constructor(cardSuitTypes, cardNumberTypes) {
    this._cardSuitTypes = cardSuitTypes;
    this._cardNumberTypes = cardNumberTypes;
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
