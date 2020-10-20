import React, { useState } from 'react';
import './App.css';
import ReactReduxPage from './pages/ReactReduxPage';

function App() {
  const [num, setnum] = useState(0)
  return (
    <div className="App">
      <button onClick={() => setnum(num + 1)}>change num {num}</button>
      <ReactReduxPage num={num} />
    </div>
  );
}

export default App;
