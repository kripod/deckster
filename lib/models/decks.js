import Standard52CardDeck from './decks/standard-52card-deck';

/**
 * Represents a list of common card decks.
 */
export default class Decks {
  /**
   * @type {Deck}
   */
  static get Standard52Card() {
    return Standard52CardDeck;
  }
}
