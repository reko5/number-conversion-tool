let ones = [
  "",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
];
let tens = [
  "",
  "",
  "twenty",
  "thirty",
  "forty",
  "fifty",
  "sixty",
  "seventy",
  "eighty",
  "ninety",
];
let teens = [
  "ten",
  "eleven",
  "twelve",
  "thirteen",
  "fourteen",
  "fifteen",
  "sixteen",
  "seventeen",
  "eighteen",
  "nineteen",
];

export function convertToString(number) {
  if (number < 1 && number > -1) return "zero";
  else return convertMillions(number);
}

function convertMillions(number) {
  if (number >= 1000000) {
    return (
      convertMillions(Math.floor(number / 1000000)) +
      " million " +
      convertThousands(number % 1000000)
    );
  } else {
    return convertThousands(number);
  }
}

function convertThousands(number) {
  if (number >= 1000 && number % 1000 !== 0) {
    return (
      convertHundreds(Math.floor(number / 1000)) +
      " thousand " +
      convertHundreds(number % 1000)
    );
  } else if (number >= 1000) {
    return (
      convertHundreds(Math.floor(number / 1000)) +
      " thousand and " +
      convertHundreds(number % 1000)
    );
  } else {
    return convertHundreds(number);
  }
}

function convertHundreds(number) {
  if (number >= 100 && number % 100 !== 0) {
    return (
      ones[Math.floor(number / 100)] +
      " hundred and " +
      convertTens(number % 100)
    );
  } else if (number > 99) {
    return (
      ones[Math.floor(number / 100)] + " hundred " + convertTens(number % 100)
    );
  } else {
    return convertTens(number);
  }
}

function convertTens(number) {
  if (number < 10) return ones[number];
  else if (number >= 10 && number < 20) return teens[number - 10];
  else {
    return tens[Math.floor(number / 10)] + "-" + ones[number % 10];
  }
}
