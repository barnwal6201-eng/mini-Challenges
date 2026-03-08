import React from 'react'
import { useState } from 'react'

const App = () => {
   
  const [userNum, setUserNum] = useState("")
  
  const inputHandler = (e) =>{
    const digits = e.target.value.replace(/\D/g, "").slice(0,10)
    let format = ""

    if(digits.length > 0) format = "+(" + digits.substring(0,3)
    if(digits.length >= 4) format += ")" 
    if(digits.length >= 3) format += " - " + digits.substring(3,10)

      setUserNum(format)
  }
   
  return (
    <div>
      <h1>Telephone formatter</h1>
      <hr />
      <input
        type="text"
        placeholder="Mobile number"
        value={userNum}
        onChange={inputHandler}
      />
      <p>+(123) - 4567890</p>
    </div>
  )
}

export default App

