import React, { useState, useRef } from "react";
import convertToString from "./Converter";

function App() {
  const [number, setString] = useState();
  const numberRef = useRef();

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
      <div>{number}</div>
    </>
  );
}

export default App;
