export default class Helper {
  /*static getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }*/

  static getObjectById(array, id) {
    let results = array.filter((obj) => {
      return obj.id === id;
    });

    // The value can only be interpreted correctly whether there is 1 result
    return results.length === 1 ? results[0] : null;
  }
}
