import { createContext, useState } from 'react';
import './App.css';
import ClickCounter from './components/HOC/clickCounter';
import MouseOverCounter from './components/HOC/mouseOverCounter';
import RightClickCounter from './components/HOC/rightClickCounter';


function App() {

  return (
    <div className="App">
      <ClickCounter />
      <MouseOverCounter />
      <RightClickCounter />
    </div>
  );
}

export default App;
