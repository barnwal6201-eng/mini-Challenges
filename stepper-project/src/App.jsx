import React from 'react'
import { useState } from 'react'
const steps = [
  { numbers:1, details:'Contact Details' },
  {numbers:2, details:'Shopping Adress'},
  { numbers:3,details:'Payment'},
  { numbers:4, details:'Delivered'}
]

const titles = [
  "Add contact details for further communications.",
  "Enter your shipping address.",
  "Complete your payment details.",
  "Your order has been delivered!"
]


const App = () => {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () =>{
    if(activeStep < steps.length - 1){
      setActiveStep(activeStep+1)
    }
  }

  const handlePrev =() =>{
    if(activeStep > 0){
      setActiveStep(activeStep-1)
    }
  }
  return (
  <div>
    <h1>Stepper</h1>
    <hr />
    <div className='stepper'>
      {steps.map(function(elem, index){

        const isActive = index === activeStep
        return <div className="step"key={index}>
        <div className={isActive ? 'active' : ''}>{elem.numbers}</div>
        <span>{elem.details}</span>
      </div>
      })}
    </div>
     <h2>{titles[activeStep]}</h2>

     <div className="btns">
      <button onClick={handlePrev}>Previous</button>
      <button onClick={handleNext}>Next</button>
     </div>
  </div>
  )
}

export default App

