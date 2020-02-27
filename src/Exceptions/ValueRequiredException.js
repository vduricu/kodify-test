"use strict";

class ValueRequiredException extends Error {
  constructor() {
    super("Value required");
  }
}

module.exports = ValueRequiredException;
