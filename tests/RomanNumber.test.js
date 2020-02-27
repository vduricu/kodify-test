"use strict";

const { expect } = require("chai");

const RomanNumber = require("../src/RomanNumber");

describe("Roman Number Challenge unit test", () => {
  it("Empty or null should throw 'Value required'", () => {
    expect(() => new RomanNumber(null)).to.throw("Value required");
    expect(() => new RomanNumber()).to.throw("Value required");
    expect(() => new RomanNumber("")).to.throw("Value required");
  });
  it("Values outside interval should throw 'Invalid range'", () => {
    expect(() => new RomanNumber(0)).to.throw("Invalid range");
    expect(() => new RomanNumber(10000)).to.throw("Invalid range");
  });
  it("Invalid values should throw 'Invalid value'", () => {
    expect(() => new RomanNumber("CD1X")).to.throw("Invalid value");
    expect(() => new RomanNumber("error")).to.throw("Invalid value");
    expect(() => new RomanNumber("MMMMCMXCIX")).to.throw("Invalid value");
    expect(() => new RomanNumber("IIII")).to.throw("Invalid value");
    expect(() => new RomanNumber("MMMMDMXCIX")).to.throw("Invalid value");
  });
  it("Correct Roman Numbers should return the Right Integer values", () => {
    expect((new RomanNumber("I")).toInt()).to.equal(1);
    expect((new RomanNumber("III")).toInt()).to.equal(3);
    expect((new RomanNumber("IV")).toInt()).to.equal(4);
    expect((new RomanNumber("V")).toInt()).to.equal(5);
    expect((new RomanNumber("1473")).toInt()).to.equal(1473);
    expect((new RomanNumber("CDXIX")).toInt()).to.equal(419);
    expect((new RomanNumber("MCDLXXXII")).toInt()).to.equal(1482);
    expect((new RomanNumber("MCMLXXX")).toInt()).to.equal(1980);
  });
  it("Correct Integers should return the Right Roman Number values", () => {
    expect((new RomanNumber(1)).toString()).to.equal("I");
    expect((new RomanNumber(3)).toString()).to.equal("III");
    expect((new RomanNumber(4)).toString()).to.equal("IV");
    expect((new RomanNumber(5)).toString()).to.equal("V");
    expect((new RomanNumber(1968)).toString()).to.equal("MCMLXVIII");
    expect((new RomanNumber("1473")).toString()).to.equal("MCDLXXIII");
    expect((new RomanNumber(2999)).toString()).to.equal("MMCMXCIX");
    expect((new RomanNumber(3000)).toString()).to.equal("MMM");
  });
});
