import React from 'react';
import logo from './logo.svg';
import './App.css';
import Stateful from './components/Stateful'
import Stateless from './components/Stateless'
import Presentacional from './components/Presentational'
import HolaMundo from './components/HolaMundo'
function App() {
  return (
    <div className="App">
     <Stateful/>
     <Stateless/>
     <Presentacional/>
     <HolaMundo/>
    </div>
  );
}

export default App;
