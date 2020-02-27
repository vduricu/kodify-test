"use strict";

class InvalidValueException extends Error {
  constructor() {
    super("Invalid value");
  }
}

module.exports = InvalidValueException;
