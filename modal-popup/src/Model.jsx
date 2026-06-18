import React from 'react'

const Model = () => {
  return (
    <div className='h-40 w-150 border bg-white'>
      <div className='flex justify-between mt-2 mb-2'>
        <h1 className='font-bold text-xl ml-2'>Modal Heading</h1>
        <button className='border w-5 mr-3 cursor-pointer'>X</button>
      </div>

      <div className='mt-2 ml-3 ' >
        <p>This is modal content. You can put any content here. This has a groovy backdrop!
            You can also close this model by clicking outside of it or pressing the escape key.
        </p>
      </div>

      <div className='mt-6 flex justify-end'>
        <button className='border mr-3 w-15 cursor-pointer'>Close</button>
      </div>
    </div>
  )
}

export default Model
