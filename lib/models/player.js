export default class Player {
  get id() {
    return this._id;
  }

  get cards() {
    return this._cards;
  }

  constructor(id = null) {
    this._id = id;
    this._cards = [];
  }
}
