import React, { useState, useRef } from "react";
import { convertToString } from "./Converter";

const NumberConverter = () => {

  const [number, setString] = useState();
  const numberRef = useRef();

  function handleNumberConverter() {
    const number = numberRef.current.value;
    if (number === "" || number > 999999999999)
      return setString("Pleas type a number from 0 to 999.999.999.999!");
    setString((newString) => {
      return (newString = convertToString(number));
    });
    numberRef.current.value = null;
  }

  return (
    <>
      <>Number Converter</>
      <>Enter your number below:</>
      <input ref={numberRef} type="number" />
      <button onClick={handleNumberConverter}>Convert Number</button>
      <>Your number as a string is:</>
      <div>{number}</div>
      <>Hint: Only works with whole numbers from 0 to 999.999.999.999</>
    </>
  );
};

export default NumberConverter;
