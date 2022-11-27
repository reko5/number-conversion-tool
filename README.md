# Arabic number conversion tool by reko5

The application's main goal to converts numeric input into the English phrase of that number.

I forked the original repo as wanted (link to my fork: https://github.com/reko5/dina-assessment ).

I used React, because create-react-app installed almost everything that I needed for the project and its easy to work with.

Commits have been made after every important addition.

I made a simple and smooth user interface with all the informations that the user need for easy usability of the app:

![alt text](https://github.com/reko5/number-converter-tool/tree/main/public/NumberConverter1.jpg?raw=true)

![alt text](https://github.com/reko5/number-converter-tool/tree/main/public/NumberConverter2.jpg?raw=true)

![alt text](https://github.com/reko5/number-converter-tool/tree/main/public/NumberConverter3.jpg?raw=true)

<h2>Tech stack that I used:</h2>
-----------------------------------

- framework: React
- JavaScript
- HTML
- CSS
- React-Bootstrap
- Jest

These are above the requirements for running the application in a browser. I used Google Chrome (version: 107.0.5304.107).

<h2>List of features:</h2>
--------------------------

App.js:
- Added HTML elements and CSS properties with Bootstrap

- Contains an input field (number type) for user inputs.

- Created a button with an onClick mouse event handler for call handleNumberConverter function.

- handleKeyDown function calls handleNumberConverter function too when "Enter" key pressed in the input field.

- handleNumberConverter contains the logic of validation and call the convertToString function in Converter.js for conversion logic.

- Rounding numbers with zeroes at the end.

- Validations for inputs send error message to the screen, when:
<pre>
  ( Input field is empty, number is smaller than -999.999.999.999, number is bigger than 999.999.999.999 )
  ( Number starts with zero and not followed by a decimal operator or start with decimal operator. )
  ( Fractional characters number bigger than five. )
</pre>

Converter.js:
- Conversion logic for numbers from -999.999.999.999 to 999.999.999.999 .

- Optional conversion logic for numbers between 1000 and 2000 based on british english.

- Can convert fractional numbers with maximum of five fractional characters.

- Can convert negative numbers.

- Numbers greater than 100 may include the word "and" between the hundreds figure and the rest of the number.

Converter.spec.js:
- This file contain the Converter.js's convertToString function's tests.

- It contains 28 test cases.

- Examples for test cases that I wrote:
<pre>
-50000  === minus fifty thousand
-1476   === minus fourteen hundred and seventy-six
-895.54 === minus eight hundred and ninety-five point five four
-0.532  === minus zero point five three two
0       === zero
0.1234  === zero point one two three four
7       === seven
42      === forty-two
1999    === nineteen hundred and ninety-nine
2001    === two thousand and one
17999   === seventeen thousand nine hundred and ninety-nine
100001  === one hundred thousand and one
342251  === three hundred and forty-two thousand two hundred and fifty-one

1300420 === one million three hundred thousand four hundred and twenty

123456789 === one hundred and twenty-three million four hundred and fifty-six thousand seven hundred and eighty-nine

260415807402.34012  ==== two hundred and sixty billion four hundred and fifteen million eight hundred and seven thousand four hundred and two point three four zero one two
</pre>

index.js:
- Entering point for the applictaion, contains the logic for rendering the App component.

index.css:
- Contains the styling of body and few divs.

**<p>Roadmap</p>**
At the moment I don't plan to write additional features for it, but for later a virtual numpad could be useful feature, or a table for input/output history.

**<p>Support</p>**
If you have any question about the project, feel free to contact me on reichert.kornel@gmail.com

**<p>Contributing</p>**
I want to thanks for my former english teacher, Gergely Szabó for the additional information and advices in british grammar to the optional part.