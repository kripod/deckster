# deckster.js

[![Version (npm)](https://img.shields.io/npm/v/deckster.svg)](https://npmjs.com/package/deckster)
[![Documentation Status](https://doc.esdoc.org/github.com/kripod/deckster.js/badge.svg)](https://doc.esdoc.org/github.com/kripod/deckster.js)
[![Build Status](https://img.shields.io/travis/kripod/deckster.js/master.svg)](https://travis-ci.org/kripod/deckster.js)
[![Dependency Status](https://img.shields.io/versioneye/d/user/projects/563dcd194d415e001e0001bd.svg)](https://versioneye.com/user/projects/563dcd194d415e001e0001bd)

An open-source JavaScript library for creating card games.

The project is written in ECMAScript 6 and uses [ESDoc][] for documentation.

[ESDoc]: https://esdoc.org

## Getting started

``` js
// Initialize the array of players who can participate in a game's rounds
let players = [
  new Deckster.Player(0),
  new Deckster.Player(1),
  new Deckster.Player(2),
  new Deckster.Player(3)
];

// Creates a new game instance which has a set of cards available to play with
let game = Deckster.createGame();

// Initiates a new round of the game, in which a talon gets shuffled, and cards can be dealt from it
let round = game.createRound();
```
