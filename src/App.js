import React, { useState } from 'react';
import Tooltip from './components/Tooltip';
import './App.css';

const App = () => {
  const [position, setPosition] = useState('top');

  const changePosition = (newPosition) => {
    setPosition(newPosition);
  };

  return (
    <div className="container">
      <div className="button-container">
      <h1>React Tooltip</h1>
        <div className="button-group">
          <h4>Select the tooltip position</h4>
          <button onClick={() => changePosition('top')}>Top</button>
          <button onClick={() => changePosition('bottom')}>Bottom</button>
          <button onClick={() => changePosition('left')}>Left</button>
          <button onClick={() => changePosition('right')}>Right</button>
        </div>
        <br/>
        <br/>
        <br/>
        <Tooltip position={position}>
          <button>Hover over me!</button>
        </Tooltip>
      </div>
    </div>
  );
};

export default App;
