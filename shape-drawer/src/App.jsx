import React, { useState } from 'react'

const App = () => {
     
  const [selectedShape, setSelectedShape] = useState('circle');
  const [shapes, setShapes] = useState([]);
  const [isActive, setIsActive] = useState(true);
  const [size, setSize] = useState(4);
  const [color, setColor] = useState('#000000')
  const [deletedShapes, setDeletedShapes] = useState([]);

  const clicksHandler = (e) =>{
   //exact position where we click
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

     const newShapes = {
        type: selectedShape,
        size: size,
        color: color,
        x: x,
        y: y,
     }
     setShapes([...shapes, newShapes]);
     setIsActive(false);
  }

  const deleteHandler = () => {
    if(shapes.length === 0) return;;

    const lastShape = shapes[shapes.length - 1];
    setShapes(shapes.slice(0, -1));
    setDeletedShapes([...deletedShapes, lastShape]);
    if(shapes.length === 1) setIsActive(true);
  }

  const redoHandler = () => {
     console.log("Wapas aa gaya")

   if(deletedShapes.length === 0) return;
     
   const lastDeleted = deletedShapes[deletedShapes.length - 1];
   setDeletedShapes(deletedShapes.slice(0, -1));
   setShapes([...shapes, lastDeleted]);
     
  }

  const clearHandler = () =>{

    setDeletedShapes([]);
    setShapes([])
  }

  return (
    <div>
      <h1 className='text-3xl text-center mt-4 mb-4 font-semi-bold'>Shape Drawer</h1>
      <hr />
       
       <div className='flex justify-center gap-4 mt-6'>
        <button 
        onClick={clearHandler}
        className={isActive? 'bg-gray-500 text-gray-600 cursor-none h-10 w-20 rounded-xl' : 'h-10 w-20 bg-blue-500 rounded-xl text-white text-xl hover:rotate-2'}>
          Clear
        </button>
        <button
        onClick={deleteHandler}
        className={isActive? 'bg-gray-500 text-gray-600 cursor-none h-10 w-20 rounded-xl' : 'h-10 w-20 bg-blue-500 rounded-xl text-white text-xl hover:rotate-2'}>
          Undo
        </button>
        <button
        onClick={redoHandler}
        className={isActive? 'bg-gray-500 text-gray-600 cursor-none h-10 w-20 rounded-xl' : 'h-10 w-20 bg-blue-500 rounded-xl text-white text-xl hover:rotate-2'}>
          Redo
        </button>
        <select
        onChange={(e)=>setSelectedShape(e.target.value)}
        id="shapes" className='border-gray-500 w-30 h-9 border '>
          <option value="circle">Circle</option>
          <option value="square">Square</option>
        </select>
        <input
         type="color" 
         onChange={(e) => setColor(e.target.value)}
         id="color-picker" 
         className='w-15 h-8 border-gray-500 border-2' />

        <input
         type="range"
          id="size"
          value={size}
          min='10'
          max='100'
          onChange={(e)=>setSize(e.target.value)}
          className='h-0.5 mt-4 bg-sky-500 font-extrabold' />
       </div>

       <div 
       onClick={clicksHandler}
       className='h-120 w-170 border-dashed m-auto mt-10 border-2 hover:border-red-600 lg:w-350 overflow-clip'
       style={{position: 'relative'}}
       >
          {isActive ?<p className='text-center text-gray-400 text-2xl m-auto mt-30 border-gray-400 border-2 h-25 w-85 '>
            Click anywhere in this area to add a {selectedShape}.</p> : ''}
            
           {
            shapes.map((shape, index) => (
              shape.type==='circle'?
              (<div key={index} className='rounded-full border' style={{backgroundColor: shape.color, height:`${shape.size}px`, width:`${shape.size}px`, position: 'absolute', left: `${shape.x - shape.size / 2}px`, top: `${shape.y - shape.size / 2}px`}} />):
              (<div key={index} className='border' style={{backgroundColor: shape.color, height:`${shape.size}px`, width:`${shape.size}px`, position: 'absolute', left: `${shape.x - shape.size / 2}px`, top: `${shape.y - shape.size / 2}px`}}/>)
            ))
           }

       </div>
    </div>
  )
}

export default App
