import React from 'react'
import { useState } from 'react'

const App = () => {
  const [title, setTitle] = useState('')
   const [task, setTask] = useState([])

  const submitBtn = (e) =>{
    const copyTask = [...task];
    
    copyTask.push({title})
    
      setTask(copyTask)

    setTitle('')
  }
  function handlekeyDown(e){
    if(e.key === 'Enter') submitBtn()
  }

  const delBtn =(idx) => {
      const copyTask = [...task];

         copyTask.splice(idx, 1)

         setTask(copyTask);
  }
  return (
    <div>
      <h1 className='font-bold text-4xl w-full text-center mt-2 mb-2'>Chips Input</h1>
      <hr />

      <input type="text" 
       placeholder='type and hit enter'
      className='px-5 w-200 font-medium py-2.5 hover:border-amber-600 border-2 mt-8 outline-none mb-10 flex justify-center ml-80 rounded'
      value={title}
      onKeyDown={handlekeyDown}
      onChange={(e)=>{
          setTitle(e.target.value)
      } }
      />
      <div className='flex flex-wrap gap-10 px-80'>
       {task.map(function(elem, idx){
        console.log(elem)
        return <div key={elem.idx}
        className='flex items-center justify-center bg-gray-300 h-15 w-30 overflow-auto border-2 border-white rounded-4xl'
        >{elem.title}
         <button onClick={() => delBtn(idx)} className='ml-2 font-bold cursor-pointer text-red-500'>✕</button>
        </div>
       })}

      </div>
    </div>
  )
}

export default App

