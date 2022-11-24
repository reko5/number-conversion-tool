const Converter = require("./Converter");

describe("Numbers converted to string based on british english.", () => {
  test("All test need to be fulfilled.", () => {
    expect(Converter.convertToString(7)).toEqual("seven");
    expect(Converter.convertToString(42)).toEqual("forty-two");
    expect(Converter.convertToString(1999)).toEqual(
      "one thousand nine hundred and ninety-nine"
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
    expect(Converter.convertToString(100000000)).toEqual(
      "one hundred million"
    );
    expect(Converter.convertToString(123456789)).toEqual(
      "one hundred and twenty-three million four hundred and fifty-six thousand seven hundred and eighty-nine"
    );
    expect(Converter.convertToString(123456789123)).toEqual(
      "one hundred and twenty-three billion four hundred and fifty-six million seven hundred and eighty-nine thousand one hundred and twenty-three"
    );
  });
});
