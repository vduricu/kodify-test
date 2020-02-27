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

    if (!Number.isNaN(Number(this.#number)) && this.#number !== "") {
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

    const copy = this.#intVersion;
    this.#stringVersion = "";
  }

  _convertFromString() {
    if (this.#stringVersion === "") {
      throw new Exceptions.ValueRequiredException();
    }

    const stringExpanded = this._extractStringObject();

    this.#intVersion = Object.keys(stringExpanded)
      .reduce((accum, numeral) => accum + this._convertStringToInteger(numeral, stringExpanded[numeral]), 0);
  }

  _extractStringObject() {
    const regexPattern = new RegExp("^(M{0,2}CM|M{0,3})(C?D)?(C{0,2}XC|C{0,3})(X?L)?(X{0,2}IX|X{0,3})(I?V)?(I{0,3})$", "i");
    const match = this.#stringVersion.match(regexPattern);
    if (!match) {
      throw new Exceptions.InvalidValueException();
    }

    const [M, D, C, L, X, V, I] = match.slice(1, match.length);
    return {
      M,
      D,
      C,
      L,
      X,
      V,
      I
    };
  }

  _convertStringToInteger(type, value) {
    if (!value || value === "") {
      return 0;
    }

    switch (type) {
      case "M":
        return value.indexOf("C") >= 0 ? 1000 * (value.length - 1) - 100 : 1000 * value.length;
      case "C":
        return value.indexOf("X") >= 0 ? 100 * (value.length - 1) - 10 : 100 * value.length;
      case "X":
        return value.indexOf("I") >= 0 ? 10 * (value.length - 1) - 1 : 10 * value.length;
      case "I":
        return value.length;
    }

    switch (type) {
      case "D":
        return value === "CD" ? 400 : 500;
      case "L":
        return value === "XL" ? 40 : 50;
      case "V":
        return value === "IV" ? 4 : 5;
    }

    return 0;
  }
}

module.exports = RomanNumber;
