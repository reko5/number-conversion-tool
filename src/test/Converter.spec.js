import { convertToString } from "../components/Converter";

describe("Numbers converted to string based on british english.", () => {
  test("All test need to be fulfilled.", () => {
    expect(convertToString(7)).toEqual("seven");
    expect(convertToString(42)).toEqual("forty-two");
    expect(convertToString(1999)).toEqual(
      "nineteen hundred and ninety-nine"
    );
    expect(convertToString(2001)).toEqual("two thousand and one");
    expect(convertToString(3000)).toEqual("three thousand");
    expect(convertToString(17999)).toEqual(
      "seventeen thousand nine hundred and ninety-nine"
    );
    expect(convertToString(100001)).toEqual(
      "one hundred thousand and one"
    );
    expect(convertToString(342251)).toEqual(
      "three hundred and forty-two thousand two hundred and fifty-one"
    );
    expect(convertToString(1300420)).toEqual(
      "one million three hundred thousand four hundred and twenty"
    );
    expect(convertToString(1985471)).toEqual(
      "one million nine hundred and eighty-five thousand four hundred and seventy-one"
    );
    expect(convertToString(100000000)).toEqual("one hundred million");
    expect(convertToString(123456789)).toEqual(
      "one hundred and twenty-three million four hundred and fifty-six thousand seven hundred and eighty-nine"
    );
    expect(convertToString(123456789123)).toEqual(
      "one hundred and twenty-three billion four hundred and fifty-six million seven hundred and eighty-nine thousand one hundred and twenty-three"
    );
  });
});
