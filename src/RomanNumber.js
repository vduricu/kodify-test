"use strict";

const Exceptions = require("./Exceptions");

class RomanNumber {
  #intVersion = 0;

  #stringVersion = "";

  #number = "";

  constructor(number) {
    this.#number = number;

    this._prerequisitesCheck();
    this._doConversion();
  }

  toInt() {
    return this.#intVersion;
  }

  toString() {
    return this.#stringVersion;
  }

  _prerequisitesCheck() {
    if (this.#number === undefined || this.#number === null) {
      throw new Exceptions.ValueRequiredException();
    }

    if (this.#number === parseInt(this.#number)) {
      this.#intVersion = parseInt(this.#number);
      this._testIsNumber();
    } else {
      this.#stringVersion = this.#number.trim()
        .toUpperCase();
      this._testIsString();
    }
  }

  _testIsNumber() {
    if (this.#intVersion < 1 || this.#intVersion > 3999) {
      throw new Exceptions.InvalidRangeException();
    }
  }

  _testIsString() {
    if (this.#stringVersion === "") {
      throw new Exceptions.ValueRequiredException();
    }
  }

  _doConversion() {

  }
}

module.exports = RomanNumber;
