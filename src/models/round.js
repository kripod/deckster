import Card from './card';
import Utils from './../utils';

/**
 * Represents a round of a game. Most of the player interactions happen in this class.
 */
export default class Round {
  /**
   * Gets the players in the round.
   * @type {Player[]}
   */
  get players() {
    return this._players;
  }

  /**
   * Gets the cards in the deck, by order.
   * @type {Card[]}
   */
  get cardsInDeck() {
    return this._cardsInDeck;
  }

  /**
   * Gets the cards shown on the table. These cards can be seen by every player in the round.
   * @type {Card[]}
   */
  get cardsOnTable() {
    return this._cardsOnTable;
  }

  /**
   * @private
   * @param {Game} ownerGame
   * @param {Player[]} players
   * @param {string} deckSeed
   */
  constructor(ownerGame, players, deckSeed) {
    this._ownerGame = ownerGame;
    this._players = players;
    this._cardsInDeck = [];
    this._cardsOnTable = [];

    // TODO: Add support for custom starting decks
    // Generate the starting deck
    let ownerDeck = ownerGame.deck;
    for (let i = ownerDeck.cardTypes - 1; i >= 0; i--) {
      this._cardsInDeck.push(new Card(i, ownerDeck, this));
    }

    // Shuffle the deck based on the deck seed
    Utils.shuffleArray(this._cardsInDeck, deckSeed);
  }

  /**
   * Deals a specific amount of cards to a single or multiple players. Once the deck becomes empty, no more cards are dealt.
   * @param {number} amount The amount of cards which should be dealt to each of the players.
   * @param {...Player} players Players to whom cards should be dealt. If empty, everyone in the round gets cards.
   */
  deal(amount = 1, ...players) {
    if (players.length === 0) {
      // Deal for every player in the round
      players = this._players;
    }

    players.forEach((player) => {
      for (let i = Math.min(amount, this._cardsInDeck.length); i > 0; i--) {
        // Remove the drawn card from the deck, and then give it to the player
        player.cards.push(this._cardsInDeck.shift());
      }
    });
  }

  /**
   * Draws a specific amount of cards to the table, so every player in the round can see them. Once the deck becomes empty, no more cards are dealt.
   * @param {number} amount The amount of cards which should be drawn.
   */
  drawToTable(amount = 1) {
    for (let i = Math.min(amount, this._cardsInDeck.length); i > 0; i--) {
      // Remove the drawn card from the deck, and then put it on the table
      this._cardsOnTable.push(this._cardsInDeck.shift());
    }
  }

  /**
   * Gets a player in the round by ID.
   * @param {(number|string)} id
   * @returns {Player?} Returns a player object or null if the player could not be found.
   */
  getPlayerById(id) {
    return Utils.getObjectById(this._players, id);
  }
}
