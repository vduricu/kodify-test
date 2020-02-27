"use strict";

const Exceptions = require("./Exceptions");

class RomanNumber {
  #intVersion = 0;

  #stringVersion = "";

  #number = "";

  constructor(number) {
    this.#number = number;

    this._prerequisitesCheck();
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
      this._convertFromInteger();
    } else {
      this.#stringVersion = this.#number.trim()
        .toUpperCase();
      this._convertFromString();
    }
  }

  _convertFromInteger() {
    if (this.#intVersion < 1 || this.#intVersion > 3999) {
      throw new Exceptions.InvalidRangeException();
    }
  }

  _convertFromString() {
    if (this.#stringVersion === "") {
      throw new Exceptions.ValueRequiredException();
    }

    const regexPattern = new RegExp("^(M{0,3})(D?)(C{0,3})(L?)(X{0,3})(V?)(I{0,3})$");

    const match = this.#stringVersion.match(regexPattern);
    if (!match) {
      throw new Exceptions.InvalidValueException();
    }
  }
}

module.exports = RomanNumber;
