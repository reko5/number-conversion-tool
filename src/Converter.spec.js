const converter = require("./Converter");

describe("Numbers converted to string based on british english.", () => {
  test("All test need to be fulfilled.", () => {
    expect(converter.convertToString(7)).toEqual("seven");
    expect(converter.convertToString(42)).toEqual("forty-two");
    expect(converter.convertToString(1999)).toEqual("one thousand nine hundred and ninety-nine");
    expect(converter.convertToString(2001)).toEqual("two thousand and one");
    expect(converter.convertToString(17999)).toEqual("seventeen thousand nine hundred and ninety-nine");
    expect(converter.convertToString(100001)).toEqual("one hundred thousand and one");
    expect(converter.convertToString(342251)).toEqual("three hundred and forty-two thousand two hundred and fifty-one");
    expect(converter.convertToString(1300420)).toEqual("one million three hundred thousand four hundred and twenty");
  });
});
