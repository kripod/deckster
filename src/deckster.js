import Card from './models/card';
import Deck from './models/deck';
import Decks from './models/decks';
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
   * @type {Deck}
   */
  static get Deck() {
    return Deck;
  }

  /**
   * @type {Decks}
   */
  static get Decks() {
    return Decks;
  }

  /**
   * @type {Game}
   */
  static get Game() {
    return Game;
  }

  /**
   * @type {Player}
   */
  static get Player() {
    return Player;
  }
}
