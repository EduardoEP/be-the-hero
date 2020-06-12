import React, {useState}  from 'react';

import "./global.css";

import Header from "./Header";

// JSX (JavaScript XML)

function App() {
  const [counter, setCounter] = useState(0);

  function increment() {
    setCounter(counter + 1);
  }
    
  function clear() {
    setCounter(counter - counter);
  }

  return (
    <div>
      <Header>Contator: {counter}</Header>
      <button onClick={increment}>Incrementar</button>
      <button onClick={clear}>Zerar</button>
    </div>
  );  
}

export default App;
