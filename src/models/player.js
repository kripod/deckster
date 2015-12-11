/**
 * Represents a player who plays in a round of a game.
 */
export default class Player {
  /**
   * Gets the ID of the player.
   * @type {?(number|string)}
   */
  get id() {
    return this._id;
  }

  /**
   * Gets the cards in the player's hand.
   * @type {Card[]}
   */
  get cards() {
    return this._cards;
  }

  /**
   * Creates a new player.
   * @param {?(number|string)} id The ID of the player.
   */
  constructor(id = null) {
    this._id = id;
    this._cards = [];
  }
}
