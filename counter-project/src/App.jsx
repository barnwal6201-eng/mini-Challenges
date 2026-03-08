import React from 'react'
import { useState } from 'react'


const App = () => {
  const [num, setNum] = useState(0);
  const [step, setStep] = useState(1)
   
  let steps = Number(step);
  
  function incbtn(){
    setNum(num + steps);
  }
  function decbtn(){
    setNum(num - steps);
  }
  function resetbtn(){
    setNum(0)
    setStep(1)
  }

  return (
    <div>
      <h1>Counter</h1>
      <hr />
      <h2>{num}</h2>
      <div className="btns">
        <button onClick={decbtn}>-</button>
        <button onClick={incbtn}>+</button>
      </div>
      <p>Increment/Decrement by 
        <input type="text" id="userinput" 
         value={step} 
         onChange={(e) => {
          setStep(e.target.value)
        
         }} />
      </p>
      <button className='reset' onClick={resetbtn}>Reset</button>
    </div>
  )
}

export default App

