import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const incrementCount = async () => {
    const response = await fetch('/api/increment', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ count }),
    });
    const data = await response.json();
    setCount(data.count);
  };

  return (
    <div className="App">
      <header className="App-header">
        <p>Count: {count}</p>
        <button onClick={incrementCount}>Increment</button>
      </header>
    </div>
  );
}

export default App;
