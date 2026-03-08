import React from 'react'
import { useState } from 'react'

const App = () => {

  const [guess, setGuess] = useState(0)
  const [message, setMessage] = useState('')
  const [targetValue, setTargetValue] = useState(Math.floor(Math.random() * 101))
  
  function checkBtn(){
   const guessNum = Number(guess)
   setMessage('')

    if( guessNum > targetValue){
        setMessage("Your guess is Higher than actual number.")
       
    }else if(guessNum < targetValue){
      setMessage("Your guess is Less than actual number.")
    }else if(guessNum === targetValue){
       setMessage("Your guess is right!")
    }
    console.log(targetValue)
  }

  function resetBtn(){
    setGuess(0);
    setMessage('');
    setTargetValue(Math.floor(Math.random() * 101))
  }

  function handleKeyDown(e){
    if(e.key === 'Enter') checkBtn()
  }
  return (
    <div>
      <h1>Guess the number</h1>
      <hr />
      <p>Guess a Number between 0 and 100</p>

      <input type="number" 
      value={guess}
      onKeyDown={handleKeyDown}
       onChange={(e) => {
          setGuess(e.target.value)
       }}
       
       />
      <div className="btns">
        <button onClick={resetBtn}>Reset</button>
        <button onClick={checkBtn}>Check</button>
      </div>

      <h3 >{message}</h3>
    </div>
  )
}

export default App


