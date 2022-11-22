import React, { useState, useRef, useEffect } from "react";
import NumberConverter from "./NumberConverter";

function App() {
  const [number] = useState(['Itt lesz majd a string']);
  const numberRef = useRef();

  useEffect(() => {})

  function handleConvertNumber(e) {
    const number = numberRef.current.value;
    if (number === "") return;
    console.log(number);
    numberRef.current.value = null;
  }

  return (
    <>
      <>Number Converter</>
      <input ref={numberRef} type="number" />
      <button onClick={handleConvertNumber}>Convert Number</button>
      <NumberConverter number={number}/>
    </>
  );
}

export default App;
