const { I } = inject();

class GeneralHelpers {
  // Assert equality between two values
  assertEqual(actual, expected, customMessage) {
    const message = customMessage || `Expected ${expected}, but got ${actual}`;
    if (actual !== expected) {
      throw new Error(message);
    }
  }
}

module.exports = new GeneralHelpers();