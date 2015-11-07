/* eslint no-console: 0 */

import Deckster from './../lib';

let players = [
  new Deckster.Player(0),
  new Deckster.Player(1),
  new Deckster.Player(2),
  new Deckster.Player(3)
];

let game = Deckster.createGame();
let round = game.createRound(players);

round.deal(2);
round.drawToTable(3);

console.log(round);
for (let i = 0; i < players.length; i++) {
  console.log('\n');
  console.log(players[i]);
}
