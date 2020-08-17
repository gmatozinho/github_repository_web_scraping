"use strict";
const parseText = require("../utils/parseText");

describe("Test get info", function () {
  it("verifies successful response", async () => {
    const text =
      "\n        airline-routes/input-routes.csv\n      \n\n      7 lines (7 sloc)\n      \n    74 Bytes\n  ";
    const filename = "input-routes.csv";
    expect(parseText.getInfo(text, filename)).toBe("7LINES(7SLOC)74BYTES");
  });
});

describe("Get bytes", function () {
  it("verifies successful response", async () => {
    const info = "7LINES(7SLOC)74BYTES";
    expect(parseText.getBytes(info)).toBe(74);
  });
});

describe("Get lines", function () {
  it("verifies successful response", async () => {
    const info = "7LINES(7SLOC)74BYTES";
    expect(parseText.getLines(info)).toBe(7);
  });
});
