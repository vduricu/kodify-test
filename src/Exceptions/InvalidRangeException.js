"use strict";

class InvalidRangeException extends Error {
  constructor() {
    super("Invalid range");
  }
}

module.exports = InvalidRangeException;
