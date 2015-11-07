import Card from './models/card';
import Game from './models/game';
import Player from './models/player';

export default class Deckster {
  static get Card() {
    return Card;
  }

  static get Player() {
    return Player;
  }

  static createGame(cardSuitTypes = 4, cardNumberTypes = 13) {
    return new Game(cardSuitTypes, cardNumberTypes);
  }
}
