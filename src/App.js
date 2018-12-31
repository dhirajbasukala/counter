import React, { Component, useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";


function App() {
  const [count, setCount] = useState(0);
  useEffect(()=>{
    document.title = count;
  })
  const increment = () => {
    setCount(count+1);
  }
  const  decrement = () => { 
    setCount(count - 1) ; 
  }
  
  return <div className='counter-wrapper'> 
  <div className="counter">
    <div className="number">
      <span>{count}</span></div>
      <div className="actions">
        <button onClick={decrement} disabled={ count === 0}  className="before">  Before</button>
        <button onClick={increment} disabled={ count === 99} className="after">After  </button>
      </div>
    </div>
  </div>
}

export default App;