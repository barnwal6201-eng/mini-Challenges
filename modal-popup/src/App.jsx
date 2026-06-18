import React, { useState } from 'react'
import Model from './Model'


const App = () => {
  const [showModel, setShowModel] = useState(true);
  return (
    <div>
      {
        showModel && (
          <div className='h-full w-full bg-transparent flex justify-center items-center m-auto'><Model /></div>
        )
      }
      <div>
      <h1 className='text-3xl font-semibold text-center mt-2 mb-2'>Modal Popup</h1>
      <hr />

      <div className='flex flex-col justify-center items-center mt-10 gap-5'>
        <div className='flex gap-4 font-semibold text-xl'>
        <label>Close dialog on outside click</label>
        <input type="checkbox" />
      </div>

      <div className='flex gap-4 font-semibold text-xl'>
        <label>Close dialog on escape</label>
        <input type="checkbox" />
      </div>

      <div className='flex gap-4 font-semibold text-xl'>
        <label>Show close icon</label>
        <input type="checkbox" />
      </div>

      <div className='flex gap-4 font-semibold text-xl'>
        <label>Show backdrop</label>
        <input type="checkbox" />
      </div>
         
         <button className='border h-8 w-25 bg-gray-200 hover:bg-gray-400 cursor-pointer '>Open Model</button>
      </div>
     </div>
    </div>
  )
}

export default App
