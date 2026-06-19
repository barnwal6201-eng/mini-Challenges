import React, { useState } from 'react'

const Model = ({showCloseBtn, setShowModel}) => {


  return (
    <div className='h-50 w-150 border bg-white'>
      <div className='flex justify-between mt-2 mb-2'>
        <h1 className='font-bold text-xl ml-2'>Modal Heading</h1>
       {
        showCloseBtn && (
           <button 
           onClick={()=>setShowModel(false)}
           className='border w-5 mr-3 cursor-pointer'>X</button>
        )
       }
      </div>

      <div className='mt-8 ml-3 ' >
        <p>This is modal content. You can put any content here. This has a groovy backdrop!
            You can also close this model by clicking outside of it or pressing the escape key.
        </p>
      </div>

           <div className='mt-8 flex justify-end'>
        <button 
        onClick={()=>setShowModel(false)}
        className='border mr-3 w-15 cursor-pointer'>Close</button>
      </div>
      
    </div>
  )
}

export default Model
