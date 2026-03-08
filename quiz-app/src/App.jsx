import React from 'react'
import { useState } from 'react'

const quizes = [
  {
    question:'What is the purpose of state in React?',
    option1:'To store information that may change over time',
    option2:'To declare static values for components',
    option3:'To define global variables',
    option4:'None of the above',
    ans:'To store information that may change over time',
    id:1 
  },
   {
    question:'What is the virtual DOM in React?',
    option1:"A direct copy of the browser's DOM",
    option2:'A lightweight in-memory representation of the real DOM',
    option3:'A CSS rendering engine',
    option4:'A server-side rendering technique',
    ans:'A lightweight in-memory representation of the real DOM',
    id:2 
  },
   {
    question:'What does the key prop help React do in lists?',
    option1:'Style list items uniquely',
    option2:'Identify which items have changed, are added, or removed',
    option3:'Sort list items automatically',
    option4:'Prevent re-rendering of all list items',
    ans:'Identify which items have changed, are added, or removed',
    id:3 
  },
   {
    question:"Which of the following correctly describes React's one-way data binding?",
    option1:'Data flows from child to parent components',
    option2:'Data flows bidirectionally between components',
    option3:'Data flows from parent to child via props',
    option4:'Data is shared globally across all components',
    ans:'Data flows from parent to child via props',
    id:4
  },
   {
    question:'Which hook is used to perform side effects in a functional component?',
    option1:'useState',
    option2:'useRef',
    option3:'useEffect',
    option4:'useContext',
    ans:'useEffect',
    id:5
  },
  {
    question:'What is the correct way to update state in React?',
    option1:'Directly modify the state variable',
    option2:'Use the setter function from useState',
    option3:'Use this.state = to assign new value',
    option4:'Use document.setState()',
    ans:'Use the setter function from useState',
    id:6
  },
   {
    question:'What does useRef hook return?',
    option1:'A state variable',
    option2:'A mutable object with a .current property',
    option3:'A copy of the DOM',
    option4:'A callback function',
    ans:'A mutable object with a .current property',
    id:7
  },
   {
    question:'Which of the following triggers a re-render in React?',
    option1:'Changing a local variable',
    option2:'Updating a useRef value',
    option3:'Calling a useState setter function',
    option4:'Modifying a constant',
    ans:'Calling a useState setter function',
    id:8
  },
   {
    question:'What is props in React?',
    option1:' Internal state of a component',
    option2:'A built-in React hook',
    option3:'Data passed from parent to child component',
    option4:'A lifecycle method',
    ans:'Data passed from parent to child component',
    id:9
  },
   {
    question:'Which method is used to render a React app to the DOM?',
    option1:'React.start()',
    option2:'ReactDOM.render() or createRoot().render()',
    option3:'React.mount()',
    option4:'ReactDOM.init()',
    ans:'ReactDOM.render() or createRoot().render()',
    id:10
  }

]

const App = () => {

  const [currIdx, setCurrIdx] = useState(0)
  const [selected, setSelected] = useState(null)
  const [showResult, setShowResult] = useState(false)
  const [correctAns, setCorrectAns] = useState(0)
  const [wrongAns, setWrongAns] = useState(0)
  
  const quiz = quizes[currIdx]

  const handleOptionClick = (option) => {
  setSelected(option)
  console.log(selected)
}

 const handleNext = () => {
 
  if(selected === quiz.ans){
         setCorrectAns(correctAns+1)
   }else{
        setWrongAns(wrongAns+1)
   }


    if(currIdx === quizes.length - 1){
      setShowResult(true)
    }else{
      setCurrIdx(currIdx + 1)
      setSelected(null)
    }
  }
  
  if (showResult) {
  return (
    <div>
      <h1>Quiz App</h1>
      <hr />
  
      <div className="container">
        <div className="box">
          <ul className="answers">
            <li className='result'>Result</li>
            <li>Total Questions: {quizes.length}</li>
            <li>Total Score: {quizes.length}</li>
            <li>Correct Answers: {correctAns}</li>
            <li>Wrong Answers: {wrongAns}</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

  return (
    <div>
      <h1>Quiz App</h1>
      <hr />
      <div className="container">
        <div className="box">
          <div className="nav">
          <nav>TOPIC: React</nav>
          <nav>{currIdx+1}/{quizes.length}</nav>
          </div>
          
          <div key={quiz.id}>
          <div className="ques">
            <h2>{quiz.question}</h2>
          </div>
            <ul className="option">
              {[quiz.option1, quiz.option2, quiz.option3, quiz.option4].map((option)=>(
               <li 
              key={option}
             onClick={() => handleOptionClick(option)} 
             style={{backgroundColor: selected === option ? '#2c3658b9' :'#2c365833' }}>
              {option}</li>
              ))}
           
          </ul>
          </div>
         
          <footer>
            <button onClick={handleNext} disabled={selected === null}
            >{currIdx === quizes.length-1 ? 'Finish' : 'Next'}</button>
          </footer>
        </div>
      </div>
    </div>
  )
}

export default App

