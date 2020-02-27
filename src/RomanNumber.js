"use strict";

class RomanNumber {
    #intVersion = 0;
    #stringVersion = "";
    #number = "";

    constructor(number) {
        this.#number = number;
    }

    toInt() {
        return this.#intVersion;
    }

    toString() {
        return this.#stringVersion;
    }
}

module.exports = RomanNumber;