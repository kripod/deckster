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
   * Gets the cards in talon.
   * @type {Card[]}
   */
  get cardsInTalon() {
    return this._cardsInTalon;
  }

  /**
   * Gets the cards shown on the table. These cards can be seen by every player in the round.
   * @type {Card[]}
   */
  get cardsShownOnTable() {
    return this._cardsShownOnTable;
  }

  /**
   * @private
   * @param {Game} ownerGame
   * @param {Player[]} players
   * @param {string} talonSeed
   */
  constructor(ownerGame, players, talonSeed) {
    this._ownerGame = ownerGame;
    this._players = players;
    this._cardsInTalon = [];
    this._cardsShownOnTable = [];

    // TODO: Add support for custom starting talons
    // Generate the starting talon
    let cardTypes = this._ownerGame.deck.cardSuitTypes * this._ownerGame.deck.cardNumberTypes;
    for (let i = cardTypes - 1; i >= 0; i--) {
      this._cardsInTalon.push(new Card(i, this._ownerGame, this));
    }
    Utils.shuffleArray(this._cardsInTalon, talonSeed);
  }

  /**
   * Deals a specific amount of cards to a single or multiple players. No cards are dealt if the talon is empty.
   * @param {number} amount The amount of cards which should be dealt to each of the players.
   * @param {...Player} players Players to whom cards should be dealt. If empty, everyone in the round gets cards.
   */
  deal(amount = 1, ...players) {
    if (players.length === 0) {
      // Deal for every player in the round
      players = this._players;
    }

    players.forEach((player) => {
      for (let i = Math.min(amount, this._cardsInTalon.length); i > 0; i--) {
        // Give the randomly drawn card to the player, and then remove it from the talon
        player.cards.push(this._cardsInTalon[0]);
        this._cardsInTalon.splice(0, 1);
      }
    });
  }

  /**
   * Deals a specific amount of cards to the table, so every player in the round can see them. No cards are dealt if the talon is empty.
   * @param {number} amount The amount of cards which should be drawn.
   */
  drawToTable(amount = 1) {
    // Put the randomly drawn card on the table, and then remove it from the talon
    for (let i = Math.min(amount, this._cardsInTalon.length); i > 0; i--) {
      this._cardsShownOnTable.push(this._cardsInTalon[0]);
      this._cardsInTalon.splice(0, 1);
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
