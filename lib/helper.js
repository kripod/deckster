import crypto from 'crypto';
import Random from 'random-js';

/**
 * @private
 */
export default class Helper {
  static getObjectById(array, id) {
    let results = array.filter((obj) => {
      return obj.id === id;
    });

    // The value can only be interpreted correctly whether there is 1 result
    return results.length === 1 ? results[0] : null;
  }

  static shuffleArray(array, seed = null) {
    let randomEngines = [];
    let hash = seed != null ? crypto.createHash('sha256').update(seed).digest('hex') : null;

    // Initialize the random engine instances used for shuffling
    for (let i = 7; i >= 0; i--) {
      if (hash != null) {
        // Use a seeded random engine
        let j = i << 3;
        randomEngines.push(Random.engines.mt19937().seed(
          parseInt(hash.substring(j, j + 8), 16)
        ));

      } else {
        // Use a non-seeded random engine
        randomEngines.push(Random.engines.mt19937().autoSeed());
      }
    }

    // Shuffle the array using the Fisher-Yates algorithm, utilizing different random engines
    for (let i = array.length - 1; i > 0; i--) {
      let j = Random.integer(0, i)(randomEngines[i % 8]);

      // Exchange array[i] and array[j]
      let temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  }
}
