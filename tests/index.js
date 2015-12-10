import test from 'tape';
import Deckster from './../lib';

let players = [
  new Deckster.Player(0),
  new Deckster.Player(1),
  new Deckster.Player(2),
  new Deckster.Player(3)
];

let deck = new Deckster.Decks.Standard52Card();
let game = new Deckster.Game(deck);

test('dealing cards to players', (t) => {
  let round = game.createRound(players);
  round.deal(2);
  round.deal(1, players[0]);

  t.equal(players[0].cards.length, 3);
  for (let i = players.length - 1; i > 0; i--) {
    t.equal(players[i].cards.length, 2);
  }

  t.end();
});

test('drawing cards to the table', (t) => {
  let round = game.createRound(players);
  round.drawToTable(5);

  t.equal(round.cardsShownOnTable.length, 5);
  t.end();
});

test('seeding card decks', (t) => {
  let seed = '<A really interesting random seed>';
  let rounds = [
    game.createRound(players, seed),
    game.createRound(players, seed)
  ];

  let cardsInDeck = rounds[0].cardsInDeck.length;
  t.equal(rounds[1].cardsInDeck.length, cardsInDeck);

  for (let i = cardsInDeck - 1; i >= 0; i--) {
    t.equal(rounds[0].cardsInDeck[i].id, rounds[1].cardsInDeck[i].id);
  }

  t.end();
});
