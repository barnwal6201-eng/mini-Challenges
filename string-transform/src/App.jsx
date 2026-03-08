import React from 'react'
import { useState } from 'react'
const btnsCreate = [
  {name:'Lower Case',
    uniId:'lower'
  },
  {name:'Upper Case',
    uniId:'upper'
  },
  {name:'Camel Case',
    uniId:'camel'
  },
  {name:'Pascal Case',
    uniId:'pascal'
  },
  {name:'Snake Case',
    uniId:'snake'
  },
  {name:'Kebab Case',
    uniId:'kebab'
  },
  {name:'Trim',
    uniId:'trim'
  }
]
const App = () => {
  const [userInput, setUserInput] = useState('')
  const [display, setDisplay] = useState('')
   
  const lowerCase = (id) => {
    if(id === 'lower'){
   const changeInp = userInput.toLowerCase()
    setDisplay(changeInp)
    }
  }

  const upperrCase = (id) => {
    if(id === 'upper'){
   const changeInp = userInput.toUpperCase()
    setDisplay(changeInp)
    }
  }

  const camelCase = (id) => {
    if(id === 'camel'){
      const changeInp = userInput.toLowerCase()
      .split(" ")
      .map((word, index) => 
        index === 0 ? word : word.charAt(0).toUpperCase()
      + word.slice(1)
      ).join("");
      setDisplay(changeInp)
    }
  }

  const pascalCase = (id) => {
    if(id === 'pascal'){
      const changeInp= userInput.toLowerCase()
      .split(" ")
      .map(word => word.charAt(0).toUpperCase() 
      + word.slice(1)
    ).join("");
    setDisplay(changeInp)
    }
  }

  const snakeCase = (id) => {
    if(id === 'snake'){
      const changeInp = userInput.toLowerCase()
      .split(" ")
        .join("_");
      setDisplay(changeInp)
    }
  }

  const kebabCase = (id) => {
    if(id === "kebab"){
      const changeInp = userInput.toLowerCase()
      .split(" ")
      .join("-");
      setDisplay(changeInp)
    }
  }

  const trimCase = (id) =>{
    if(id === 'trim'){
      const changeInp = userInput.trim()
      setDisplay(changeInp)
      
    }
  }

  return (
    <div className='container'>
      <h1>String transformers</h1>
      <hr />
      <textarea type="text"
      placeholder='Enter text to transform'
      value={userInput}
      onChange={(e) =>{
        setUserInput(e.target.value)
      }}
       />
       <div className="btns">
        {btnsCreate.map(function(elem) {
          
          return <button
          key={elem.uniId}
          onClick={()=>{
               lowerCase(elem.uniId)
               upperrCase(elem.uniId)
               camelCase(elem.uniId)
               pascalCase(elem.uniId)
               snakeCase(elem.uniId)
               kebabCase(elem.uniId)
               trimCase(elem.uniId)
          }}
          >{elem.name}</button>

        })}
       </div>
        <h3>Transformed String:</h3>
        <p>{display}</p>
    </div>
  )
}

export default App

