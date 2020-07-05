import React from 'react';
import logo from './logo.svg';
import './App.css';
import Stateful from './components/Stateful'
import Stateless from './components/Stateless'
function App() {
  return (
    <div className="App">
     <Stateful/>
     <Stateless/>
    </div>
  );
}

export default App;
