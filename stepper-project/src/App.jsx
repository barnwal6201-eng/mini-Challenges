import React from 'react'
import { useState} from 'react'

const steps = [
  { number: 1, details: 'Contact Details' },
  { number: 2, details: 'Shipping Address' },
  { number: 3, details: 'Payment' },
  { number: 4, details: 'Delivered' }
]

const titles = [
  "Add contact details for further communications.",
  "Enter your shipping address.",
  "Complete Payment to complete the order.",
  "Your order has been delivered!"
]

const App = () => {
  const [activeStep, setActiveStep] = useState(0)

  const handleNext = () => {
    if (activeStep < steps.length - 1) setActiveStep(activeStep + 1)
  }

  const handlePrev = () => {
    if (activeStep > 0) setActiveStep(activeStep - 1)
  }
  return (
    <div className="container">
      <h1>Stepper</h1>
      <hr />
      <div className="stepper">
        {steps.map((elem, index) => {
          const isActive = index === activeStep
          const isCompleted = index < activeStep

          return (
            <div className="step" key={index}>
              {/* connector line */}
              {index !== 0 && (
                <div className={`line ${index <= activeStep ? 'green' : ''}`}></div>
              )}
              <div className={`circle ${isActive ? 'active' : ''} ${isCompleted ? 'completed' : ''}`}>
                {isCompleted ? '✔' : elem.number}
              </div>
              <span>{elem.details}</span>
            </div>
          )
        })}
      </div>

      <h2>{titles[activeStep]}</h2>

      <div className="btns">
        <button onClick={handlePrev} disabled={activeStep === 0}>Previous</button>
        <button onClick={handleNext} disabled={activeStep === steps.length - 1}>Next</button>
      </div>
    </div>
  )
}

export default App

