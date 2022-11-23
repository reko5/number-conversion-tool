import React, { useState, useRef /*useEffect*/ } from "react";
import NumberConverter from "./NumberConverter";
import convertToString from "./converter";

function App() {
  const [number, setString] = useState();
  const numberRef = useRef();

  //useEffect(() => {});

  function handleNumberConverter() {
    const number = numberRef.current.value;
    if (number === "") return;
    setString((newString) => {
      return (newString = convertToString(number));
    });
    numberRef.current.value = null;
  }

  return ( 
    <>
      <>Number Converter</>
      <>Instruction: Only works with whole numbers between 0 and 1000000000!</>
      <input ref={numberRef} type="number" />
      <button onClick={handleNumberConverter}>Convert Number</button>
      <NumberConverter number={number} />
    </>
  );
}

export default App;
