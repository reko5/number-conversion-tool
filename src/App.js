import React, { useState, useRef } from "react";
import { convertToString } from "./Converter";

function App() {
  const [number, setString] = useState();
  const numberRef = useRef();

  function handleNumberConverter() {
    const number = numberRef.current.value;
    if (number === "" || number >= 1000000000000)
      return setString("Pleas type a number from 0 to 1.000.000.000.000!");
    setString((newString) => {
      return (newString = convertToString(number));
    });
    numberRef.current.value = null;
  }

  return (
    <>
      <>Number Converter</>
      <br />
      <input ref={numberRef} type="number" />
      <button onClick={handleNumberConverter}>Convert Number</button>
      <div>{number}</div>
      <br />
      <>Instruction: Only works with whole numbers from 0 to 1.000.000.000.000</>
    </>
  );
}

export default App;
