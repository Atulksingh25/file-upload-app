   import React from 'react';
   
import Calculator from "./Calculator.js"
import './App.css'; // Assuming you have an App.css file for styling
  // Adjust the path as necessary
function App() {
  const name = "React User"; // Example variable

  return (
    <div className="App">
      <Calculator />
    </div>  
  );
} 

export default App;