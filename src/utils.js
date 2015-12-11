import crypto from 'crypto';
import isaac from 'isaac';

/**
 * @private
 */
export default class Utils {
  static realToInt(real, min, max) {
    return Math.floor(real * (max - min + 1)) + min;
  }

  static getObjectById(array, id) {
    let results = array.filter((obj) => {
      return obj.id === id;
    });

    // The value can only be interpreted correctly whether there is 1 result
    return results.length === 1 ? results[0] : null;
  }

  static shuffleArray(array, seed = null) {
    // Prepare the ISAAC CSPRNG
    isaac.reset();
    isaac.seed(seed != null ? seed : (new Date()).toUTCString() + Math.random());

    // Shuffle the array using the Fisher-Yates algorithm, utilizing a CSPRNG
    for (let i = array.length - 1; i > 0; i--) {
      let j = Utils.realToInt(isaac.random(), 0, i);

      // Exchange array[i] and array[j]
      let temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  }
}
