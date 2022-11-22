import React from "react";
import Number from "./Number";

export default function NumberConverter({ number }) {
  return (
      <Number key={number} number={number} />
  );
}
