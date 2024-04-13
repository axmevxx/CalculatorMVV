import React, { useState } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState('');

  const handleClick = (value) => {
    if (input !== "Error") {
      setInput(input + value);
    }
  };

  const calculate = () => {
    if (input && input !== "Error") {
      try {
        const result = eval(input);
        setInput(String(result));
      } catch (error) {
        setInput("Error");
        setTimeout(() => setInput(''), 2000);
      }
    }
  };

  const clear = () => {
    setInput('');
  };

  return (
    <div className="App">
      <div className="calculator">
        <div className="display">{input}</div>
        <div className="keypad">
          <div className="numbers">
            <button onClick={() => handleClick('1')}>1</button>
            <button onClick={() => handleClick('2')}>2</button>
            <button onClick={() => handleClick('3')}>3</button>
            <button onClick={() => handleClick('4')}>4</button>
            <button onClick={() => handleClick('5')}>5</button>
            <button onClick={() => handleClick('6')}>6</button>
            <button onClick={() => handleClick('7')}>7</button>
            <button onClick={() => handleClick('8')}>8</button>
            <button onClick={() => handleClick('9')}>9</button>
            <button onClick={() => handleClick('.')}>.</button>
            <button onClick={() => handleClick('0')}>0</button>
            <button onClick={clear}>C</button>
          </div>
          <div className="operators">
            <button onClick={() => handleClick('/')}>/</button>
            <button onClick={() => handleClick('*')}>*</button>
            <button onClick={() => handleClick('-')}>-</button>
            <button onClick={() => handleClick('+')}>+</button>
            <button onClick={calculate}>=</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
