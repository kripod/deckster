import Card from './models/card';
import Game from './models/game';
import Player from './models/player';

/**
 * Entry class for accessing the functionality of Deckster.
 */
export default class Deckster {
  /**
   * @type {Card}
   */
  static get Card() {
    return Card;
  }

  /**
   * @type {Player}
   */
  static get Player() {
    return Player;
  }

  /**
   * Creates a new game with a specific set of cards available.
   * @param {number} cardSuitTypes The amount of different card suit types.
   * @param {number} cardNumberTypes The amount of different card number types.
   * @returns {Game}
   */
  static createGame(cardSuitTypes = 4, cardNumberTypes = 13) {
    return new Game(cardSuitTypes, cardNumberTypes);
  }
}
