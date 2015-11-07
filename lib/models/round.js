import {knuthShuffle as shuffle} from 'knuth-shuffle';
import Card from './card';
import Helper from './../helper';

export default class Round {
  get players() {
    return this._players;
  }

  get cardsInTalon() {
    return this._cardsInTalon;
  }

  get cardsShownOnTable() {
    return this._cardsShownOnTable;
  }

  constructor(ownerGame, players) {
    this._ownerGame = ownerGame;
    this._players = players;
    this._cardsInTalon = [];
    this._cardsShownOnTable = [];

    // TODO: Add support for custom starting talons
    // Generate the starting talon
    let cardTypes = this._ownerGame.cardSuitTypes * this._ownerGame.cardNumberTypes;
    for (let i = cardTypes - 1; i >= 0; i--) {
      this._cardsInTalon.push(new Card(i, this._ownerGame, this));
    }
    shuffle(this._cardsInTalon);
  }

  deal(amount = 1, player = null) {
    if (player == null) {
      // Deal for every player in the round
      this._players.forEach((element) => {
        this.deal(amount, element);
      });

    } else {
      // Deal for a specific player in the round
      for (let i = Math.min(amount, this._cardsInTalon.length); i > 0; i--) {
        // Give the randomly drawn card to the player, and then remove it from the talon
        player.cards.push(this._cardsInTalon[0]);
        this._cardsInTalon.splice(0, 1);
      }
    }
  }

  drawToTable(amount = 1) {
    // Put the randomly drawn card on the table, and then remove it from the talon
    for (let i = Math.min(amount, this._cardsInTalon.length); i > 0; i--) {
      this._cardsShownOnTable.push(this._cardsInTalon[0]);
      this._cardsInTalon.splice(0, 1);
    }
  }

  getPlayerById(id) {
    return Helper.getObjectById(this._players, id);
  }
}
