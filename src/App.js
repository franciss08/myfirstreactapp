//import logo from './logo.svg';
import React, {useState} from 'react';
import {List} from './modules/List';
import './App.css';

function App() {
  const [colour, setColour] = useState('blue');
  const [previousColors, setPreviousColors] = useState(['blue']);
  const [input, setInput] = useState('');

  function handleClick() {
    const colours = ['blue', 'red', 'yellow', 'green'];
    const randomColour = colours[Math.floor(Math.random() * colours.length)];
    setColour(randomColour);
    console.log('yo',randomColour);
    setPreviousColors([randomColour, ...previousColors]);
    console.log('bo',previousColors);
  }

  function handleChange(event) {
    setInput(event.target.value);
  }

  function handleSubmit() {
    console.log(input)
    setColour(input);
    console.log('yo',input);
    setPreviousColors([input, ...previousColors]);
    console.log('bo',previousColors);
    setInput('');

  }

  return (
    <div className="App">
      <header className="App-header">
        <p style={{color:colour}}>Hello, what colour would you like me to be?!</p>
        <button onClick={handleClick}>Click for a random colour</button>
        <p>Or type one here:</p>
        <input type="text" placeholder="type CSS colour" onChange={handleChange} value={input}/>
        <button onClick={handleSubmit}>Change colour</button>
        <List previousColors={previousColors} jolly="yes"/>
      </header>
    </div>
  );
}

export default App;
