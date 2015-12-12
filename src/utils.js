import isaac from 'isaac';

/**
 * @private
 */
export default class Utils {
  static getObjectById(array, id) {
    let results = array.filter((obj) => {
      return obj.id === id;
    });

    // The value can only be interpreted correctly if there is exactly 1 result
    return results.length === 1 ? results[0] : null;
  }

  static shuffleArray(array, seed = null) {
    // Use a random seed if no seed was specified
    if (seed == null) {
      seed = new Date().toUTCString() + ' - ' + Math.random();
    }

    // Prepare the ISAAC CSPRNG
    isaac.seed(seed);

    // Shuffle the array using the Fisher-Yates algorithm, utilizing a CSPRNG
    for (let i = array.length - 1; i > 0; i--) {
      let j = Utils._realToInt(isaac.random(), 0, i);

      // Exchange array[i] and array[j]
      let temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }

    // Return the seed which was used
    return seed;
  }

  static _realToInt(real, min, max) {
    return Math.floor(real * (max - min + 1)) + min;
  }
}
