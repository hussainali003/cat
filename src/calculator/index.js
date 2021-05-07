import React from 'react'
import {useState} from 'react'
import './style.css'

const Calculator = () => {
  let [Value,setValue] = useState("");
  
  const handleClick = (e) => {
    console.log(typeof(e.target.name))
    setValue(Value.concat(e.target.name))
  }
  // yeh setValue asa chala ka jab ma "" ko concat karu ga kis aur sa to wo agil dafa mujh puri array da ga
  // jasa ka setValue(["",1]) to jab agali dafa setvalue ho gi to wo yeh ho gi ["",1,2]...

  const handleClear = (e) => {
    setValue("")
  }
  const handleCalculate = (e) => {
    setValue(eval(Value))
    // only take string parameter so that why i give him string with help of e.target.name 
  }

  
  return (
    <div className="main">
        <div className="row">
          <input className="input" value={Value} />
        </div>
        <div className="row">
          <button name="1"  className="button" onClick={e => handleClick(e)}>1</button>
          <button name="2"  className="button" onClick={e => handleClick(e)}>2</button>
          <button name="3"  className="button" onClick={e => handleClick(e)}>3</button>
          <button name="4"  className="button" onClick={e => handleClick(e)}>4</button>
        </div>
        <div className="row">
          <button name="5" className="button"  onClick={e => handleClick(e)}>5</button>
          <button name="6" className="button"  onClick={e => handleClick(e)}>6</button>
          <button name="7" className="button"  onClick={e => handleClick(e)}>7</button>
          <button name="8" className="button"  onClick={e => handleClick(e)}>8</button>
        </div>
        <div className="row">
          <button name="9" className="button"  onClick={e => handleClick(e)}>9</button>
          <button name="+" className="button1"  onClick={e => handleClick(e)}>+</button>
          <button name="-" className="button1"  onClick={e => handleClick(e)}>-</button>
          <button name="*" className="button1"  onClick={e => handleClick(e)}>*</button>
        </div>
        <div className="row">
          <button name="/"  className="button1"  onClick={e => handleClick(e)}>/</button>
          <button name="AC" className="clear-btn"   onClick={e => handleClear(e)}>AC</button>
          <button name="="  className="button1"  onClick={e => handleCalculate(e)}>=</button>
        </div>
    </div>
  )
}

export default Calculator

