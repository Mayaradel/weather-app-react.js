// src/App.js
import React from 'react';
import './App.css';
import Weather from './components/weather';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather App</h1>
        <Weather />
      </header>
    </div>
  );
}

export default App;
