import React, { useState } from 'react'

const App = () => {

  const [rows, setRows] = useState(2);
  const [cols, setCols] = useState(2);

  const table = Array.from({length: rows}, (_, i) =>
  Array.from({length: cols}, (_, j) => `${i}-${j}`)
  )

  return (
    <div>
      <h1 className='text-center mt-6 text-2xl'>Column Table</h1>
      <hr className='mt-2' />
       
       <div className='flex justify-center gap-5 mt-5'>
        <div className='flex gap-2'>
        <label> Rows :: <span>{rows}</span></label>
        <input
        type='range'
        min='2'
        max='8'
        value={rows}
        onChange={(e) => setRows(+e.target.value)}
        className='h-3 w-30 mt-2 bg-gray-100 border-2 rounded-xl'/>
       </div>

       <div className='flex gap-2'>
        <label> Columns :: <span>{cols}</span></label>
        <input
        type='range'
        min='2'
        max='8'
        value={cols}
        onChange={(e) => setCols(+e.target.value)}
        className='h-3 w-30 mt-2 bg-gray-100 border-2 rounded-xl'/>
       </div>
       </div>

       <div className='mt-10'>
        {table.map((rows, i) => (
        <div key={i} className='flex justify-center items-center gap-0.5 '>
          {rows.map((cell, j) => (
            <button key={j} className='h-10 w-10 border border-black mb-0.5'
             >{i * cols + j + 1}
              </button>
          ))}
        </div>
      ))
      }
       </div>
       
      
    </div>
  )
}

export default App

