import React from 'react'
import { useState } from 'react'

const App = () => {
  const [title, setTitle] = useState('')
  const [task, setTask] = useState([])
  const [editindex, setEditindex] = useState(null)
  
  const submitBtn = (e) =>{
       
       const copyTask = [...task]

       if (editindex !== null) {
      copyTask[editindex] = title;  // usi index pe replace karega
       setEditindex(null);
       } else {
       copyTask.push(title);
       }      

       setTask(copyTask)
       setTitle('')
  }
  
  function handlekeyDown(e){
    if(e.key === 'Enter') submitBtn()
  }

  const cancelBtn = () =>{
    setTitle('')
  }

  const editBtn = (index) => {
    if(editindex === index){
      submitBtn()
    }else{
     setTitle(task[index])
     setEditindex(index)
    }
  }
      
  const delBtn =(index) => {
      const copyTask = [...task];

         copyTask.splice(index, 1)

         setTask(copyTask);
  }
  
  return (
    <div>
      <h1>Todo List</h1>
      <hr />
      <div className="container">
      <input type="text" 
      placeholder='Enter your todo'
      value={title}
      onKeyDown={handlekeyDown}
      onChange={(e)=>{
            setTitle(e.target.value)
      }}
       />
        
      <div className="btns">
        <button onClick={submitBtn}>Submit</button>
        <button onClick={cancelBtn}>Cancel</button>
      </div>
    </div>
       <ul className="output">
       {task.map(function(elem, index) {
       
       return <li key={index}>{elem}

       <div className="btn">
        <button onClick={()=>{
          editBtn(index)
        }}>
          {editindex === index ? 'Save' : 'Edit'}</button>
       <button onClick={()=>{
        delBtn(index)
       }}>Delete</button>
       </div>
       </li>;
       })}
     </ul>

    </div>
  )
}

export default App

