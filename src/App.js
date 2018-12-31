import React, { Component, useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";


function App() {
  const [count, setCount] = useState(0);
  const [newCount, setNewCount] = useState('')
  useEffect(()=>{
    document.title = count;
  })
  const increment = () => {
    setCount(count+1);
  }
  const  decrement = () => { 
    setCount(count - 1) ; 
  }
  const getNewCount = (e) => {
    const myCount = e.target.value *1

    if(myCount > 0 && myCount < 100 || myCount === '' ){
      setNewCount(myCount);
    }
    if(myCount > 0 && myCount < 100 ){
      setCount(myCount);
    }
  }
  return <div className='counter-wrapper'> 
  <div className="counter">
    
    <input type="text" placeholder="enter number" value={newCount} className="newCount" onChange ={getNewCount} min="0" max="99" />
    {/* <button onClick={enterNumber} className="enter-number">  Enter number </button> */}

    <div className="number">
      <span>{count}</span></div>
      <div className="actions">
        <button onClick={decrement} disabled={ count === 0}  className="before">  Before <span>{count -1 }</span></button>
        <button onClick={increment} disabled={ count === 99} className="after">After <span>{count + 1}</span> </button>
      </div>
    </div>
  </div>
}

export default App;