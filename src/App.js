 import React, { useState } from "react";

function CounterApp() {
  // ek variable 'count' banaya jisme value store hogi
  const [count, setCount] = useState(0);

  // increment function
  const increment = () => {
    setCount(count + 1);
  };

  // decrement function
  const decrement = () => {
    setCount(count - 1);
  };

  // reset function
  const reset = () => {
    setCount(0);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h1>🔢 Counter App</h1>
      <h2>Count: {count}</h2>

      <button onClick={increment}>➕ Increment</button>
      <button onClick={decrement}>➖ Decrement</button>
      <button onClick={reset}>🔁 Reset</button>
    </div>
  );
}

export default CounterApp;

