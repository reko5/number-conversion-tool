const Converter = require("../Converter");

describe("Numbers converted to string based on british english.", () => {
  test("All test need to be fulfilled.", () => {
    expect(Converter.convertToString(-999999999999)).toEqual(
      "minus nine hundred and ninety-nine billion nine hundred and ninety-nine million nine hundred and ninety-nine thousand nine hundred and ninety-nine"
    );
    expect(Converter.convertToString(-82075960242)).toEqual(
      "minus eighty-two billion and seventy-five million nine hundred and sixty thousand two hundred and forty-two"
    );
    expect(Converter.convertToString(-100740652)).toEqual(
      "minus one hundred million seven hundred and forty thousand six hundred and fifty-two"
    );
    expect(Converter.convertToString(-801506)).toEqual(
      "minus eight hundred and one thousand five hundred and six"
    );
    expect(Converter.convertToString(-50000)).toEqual("minus fifty thousand");
    expect(Converter.convertToString(-1476)).toEqual(
      "minus fourteen hundred and seventy-six"
    );
    expect(Converter.convertToString(-151)).toEqual(
      "minus one hundred and fifty-one"
    );
    expect(Converter.convertToString(7)).toEqual("seven");
    expect(Converter.convertToString(42)).toEqual("forty-two");
    expect(Converter.convertToString(1999)).toEqual(
      "nineteen hundred and ninety-nine"
    );
    expect(Converter.convertToString(2001)).toEqual("two thousand and one");
    expect(Converter.convertToString(3000)).toEqual("three thousand");
    expect(Converter.convertToString(17999)).toEqual(
      "seventeen thousand nine hundred and ninety-nine"
    );
    expect(Converter.convertToString(100001)).toEqual(
      "one hundred thousand and one"
    );
    expect(Converter.convertToString(342251)).toEqual(
      "three hundred and forty-two thousand two hundred and fifty-one"
    );
    expect(Converter.convertToString(1300420)).toEqual(
      "one million three hundred thousand four hundred and twenty"
    );
    expect(Converter.convertToString(1985471)).toEqual(
      "one million nine hundred and eighty-five thousand four hundred and seventy-one"
    );
    expect(Converter.convertToString(100000000)).toEqual("one hundred million");
    expect(Converter.convertToString(123456789)).toEqual(
      "one hundred and twenty-three million four hundred and fifty-six thousand seven hundred and eighty-nine"
    );
    expect(Converter.convertToString(123456789123)).toEqual(
      "one hundred and twenty-three billion four hundred and fifty-six million seven hundred and eighty-nine thousand one hundred and twenty-three"
    );
  });
});
