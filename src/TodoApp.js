import React, { useState } from "react";

export default function Calculator() {
  const [input, setInput] = useState("");

  const handleClick = (value) => {
    setInput(input + value);
  };

  const clearInput = () => {
    setInput("");
  };

  const calculate = () => {
    try {
      setInput(eval(input).toString());
    } catch {
      setInput("Error");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Simple Calculator</h2>

      <input
        value={input}
        readOnly
        style={{ width: "150px", padding: "5px", marginBottom: "10px" }}
      />

      <div>
        {"123+456-789*0/.".split("").map((char, i) => (
          <button key={i} onClick={() => handleClick(char)}>
            {char}
          </button>
        ))}
      </div>

      <button onClick={clearInput}>Clear</button>
      <button onClick={calculate}>=</button>
    </div>
  );
}

