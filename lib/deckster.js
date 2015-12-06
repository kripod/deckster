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
   * @type {Player}
   */
  static get Player() {
    return Player;
  }

  /**
   * Creates a new game with a specific set of cards available.
   * @param {Deck} deck The card deck used for the game.
   * @returns {Game}
   */
  static createGame(deck) {
    return new Game(deck);
  }
}
