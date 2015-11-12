/**
 * @private
 */
export default class Helper {
  static getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  static getObjectById(array, id) {
    let results = array.filter((obj) => {
      return obj.id === id;
    });

    // The value can only be interpreted correctly whether there is 1 result
    return results.length === 1 ? results[0] : null;
  }

  static shuffleArray(array) {
    // TODO: Add support for random seeds
    for (let i = array.length - 1; i > 0; i--) {
      let j = Helper.getRandomInt(0, i);

      // Exchange array[i] and array[j]
      let temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  }
}
