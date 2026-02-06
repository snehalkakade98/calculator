import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  
  const [input, setInput] = useState("");

  const handleClick = (value) => {
    setInput(input + value);
  };

  const clearDisplay = () => {
    setInput("");
  };

  const calculateResult = () => {
    try {
      setInput(eval(input).toString());
    } catch {
      setInput("Error");
    }
  };

  return (
    <>
       <div className="calculator">
      <h2 className='text-white mb-3'>React Calculator</h2>
      <input type="text" value={input} readOnly className="display form-control" />

      <div className="buttons">
        <button className='shadow' onClick={clearDisplay}>C</button>
        <button className='shadow' onClick={() => handleClick("/")}>/</button>
        <button className='shadow' onClick={() => handleClick("*")}>*</button>
        <button className='shadow' onClick={() => handleClick("-")}>-</button>

        <button className='shadow' onClick={() => handleClick("7")}>7</button>
        <button className='shadow' onClick={() => handleClick("8")}>8</button>
        <button className='shadow' onClick={() => handleClick("9")}>9</button>
        <button className='shadow' onClick={() => handleClick("+")}>+</button>

        <button className='shadow' onClick={() => handleClick("4")}>4</button>
        <button className='shadow' onClick={() => handleClick("5")}>5</button>
        <button className='shadow' onClick={() => handleClick("6")}>6</button>
        <button className='shadow' onClick={calculateResult}>=</button>

        <button className='shadow' onClick={() => handleClick("1")}>1</button>
        <button className='shadow' onClick={() => handleClick("2")}>2</button>
        <button className='shadow' onClick={() => handleClick("3")}>3</button>
        <button className='shadow' onClick={() => handleClick("0")}>0</button>

        <button onClick={() => handleClick(".")}>.</button>
      </div>
    </div>
    </>
  )
}

export default App
