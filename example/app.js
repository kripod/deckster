/* eslint no-console: 0 */

import Deckster from './../lib';

let players = [
  new Deckster.Player(0),
  new Deckster.Player(1),
  new Deckster.Player(2),
  new Deckster.Player(3)
];

let deck = new Deckster.Decks.Standard52Card();
let game = Deckster.createGame(deck);
let round = game.createRound(players);

round.deal(2);
round.drawToTable(3);

console.log(round);
for (let i = 0; i < players.length; i++) {
  console.log('\n');
  console.log(players[i]);
}

console.log(deck.getCardName(players[3].cards[0]));
console.log(deck.getCardName(players[3].cards[0], false));
