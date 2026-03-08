import React from 'react'
import { useState } from 'react'
 
const status = ['Lowercase', 'Uppercase', 'Numbers', 'Symbol']
  
const App = () => {
  
  const [userValue, setUserValue] = useState('')
  
  const [conditions, setConditions] = useState('Weak')


  
  const isActive = (label) =>{
    if(label === 'Lowercase') return /[a-z]/.test(userValue)
    if(label === 'Uppercase') return /[A-Z]/.test(userValue)
    if(label === 'Numbers') return /[0-9]/.test(userValue)
    if(label === 'Symbol') return /[!@#$%^&*~]/.test(userValue)
  }

  const checkCondition = (value) => {
     const len = value.length
    

     let hasLower = /[a-z]/.test(value);
    let hasUpper = /[A-Z]/.test(value);
    let hasNums = /[0-9]/.test(value);
    let hasSymbol = /[!@#$%^&*~]/.test(value);

    let countCreteria = [hasLower, hasUpper, hasNums, hasSymbol].filter(Boolean).length;

    if(len > 7 && countCreteria >= 4){
      setConditions('Strong')
    }else if(len > 4 && countCreteria >= 3){
      setConditions('Medium')
    }else{
      setConditions('Weak')
    }
  }


  return (
    <div>
      <h1>Password Strength</h1>
      <input type="text" 
      placeholder="Enter your password" 
      value={userValue}
      onChange={(e)=>{
        setUserValue(e.target.value)
        checkCondition(e.target.value)
      }}
        />
         <div className="indicators">
      {status.map((elem) => (
      
         <span key={elem}
         style={{color: isActive(elem)? 'green' : 'gray'}}
         >{elem}</span>
        
      ))}
      </div>
        
        <div className="progress-container">
             <div 
             style={{backgroundColor: conditions === 'Strong' ? 'green': 
              conditions === 'Medium' ? 'orange': userValue.length === 3 ? 'red': 'white',
              width: conditions === 'Strong' ? '100%': conditions === 'medium'
              ? '60%' : '30%'
             }}
             ></div>
        </div>

        <p>Password has <span>{userValue.length}</span> chars</p>
        <p>Your password is <span >{conditions}</span></p>
    </div>
  )
}

export default App

