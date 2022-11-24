const Converter = require("./Converter");

describe("Numbers converted to string based on british english.", () => {
  test("All test need to be fulfilled.", () => {
    expect(Converter.convertToString(7)).toEqual("seven");
    expect(Converter.convertToString(42)).toEqual("forty-two");
    expect(Converter.convertToString(1999)).toEqual("one thousand nine hundred and ninety-nine");
    expect(Converter.convertToString(2001)).toEqual("two thousand and one");
    expect(Converter.convertToString(17999)).toEqual("seventeen thousand nine hundred and ninety-nine");
    expect(Converter.convertToString(100001)).toEqual("one hundred thousand and one");
    expect(Converter.convertToString(342251)).toEqual("three hundred and forty-two thousand two hundred and fifty-one");
    expect(Converter.convertToString(1300420)).toEqual("one million three hundred thousand four hundred and twenty");
    expect(Converter.convertToString(1985471)).toEqual("one million nine hundred and eighty-five thousand four hundred and seventy-one");
  });
});
