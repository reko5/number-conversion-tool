import React, { useState, useRef /*useEffect*/ } from "react";
import NumberConverter from "./NumberConverter";
import toString from "./converter";

function App() {
  const [number, setString] = useState();
  const numberRef = useRef();

  //useEffect(() => {});

  function handleNumberConverter() {
    const number = numberRef.current.value;
    if (number === "") return;
    setString((newString) => {
      return (newString = toString(number));
    });
    numberRef.current.value = null;
  }

  return ( 
    <>
      <>Number Converter</>
      <input ref={numberRef} type="number" />
      <button onClick={handleNumberConverter}>Convert Number</button>
      <NumberConverter number={number} />
    </>
  );
}

export default App;
