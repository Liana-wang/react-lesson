import React from 'react';
import './App.css';
import RouterPage from './pages/RouterPage';
import RouteChildren from './pages/RouteChildren';

function App() {
  return (
    <div className="App">
      <RouterPage />

      {/* route children */}
      {/* <RouteChildren /> */}
    </div>
  );
}

export default App;
