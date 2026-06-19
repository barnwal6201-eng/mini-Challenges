import React, { useEffect, useState } from 'react'
import Model from './Model'


const App = () => {

  const [showModel, setShowModel] = useState(false);
  const [showCloseBtn, setShowCloseBtn] = useState(true);
  const [bgColor, setBgColor] = useState(true);
  const [outsideClick, setOutsideClick] = useState(true);
  const [escaped, setEscaped] = useState(true);


  const handleOutsideClick = () => {
    if(outsideClick) setShowModel(false);
  };

  useEffect(()=>{
    if(!showModel || !escaped) return;

    const handleEscape = (e) => {
      if(e.key === 'Escape') setShowModel(false);
    };

    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  },[showModel, escaped]);
  

  return (
    <div>
      {
        showModel && (
          <div 
          onClick={handleOutsideClick}
          className='fixed inset-0 z-50 flex justify-center items-center'
          style={bgColor ? { backgroundColor: 'rgba(0, 0, 0, 0.5)' } : {}}
          >
            <Model
             showCloseBtn={showCloseBtn} 
             setShowModel= {setShowModel}
             /></div>
        )
      }
      <div>
      <h1 className='text-3xl font-semibold text-center mt-2 mb-2'>Modal Popup</h1>
      <hr />

      <div className='flex flex-col justify-center items-center mt-10 gap-5'>
        <div className='flex gap-4 font-semibold text-xl'>
        <label>Close dialog on outside click</label>
        <input
         type="checkbox"
         checked={outsideClick}
         onChange={()=>setOutsideClick(!outsideClick)}
         />
      </div>

      <div className='flex gap-4 font-semibold text-xl'>
        <label>Close dialog on escape</label>
        <input 
        type="checkbox"
        checked={escaped}
        onChange={()=>setEscaped(!escaped)}
        />
      </div>

      <div className='flex gap-4 font-semibold text-xl'>
        <label>Show close icon</label>
        <input
        type="checkbox"
        checked={showCloseBtn}
        onChange={()=>setShowCloseBtn(!showCloseBtn)}
        />
      </div>

      <div className='flex gap-4 font-semibold text-xl'>
        <label>Show backdrop</label>
        <input
         type="checkbox" 
         checked={bgColor}
         onChange={()=>setBgColor(!bgColor)}
         />
      </div>
         
         <button 
         onClick={()=>setShowModel(true)}
         className='border h-8 w-25 bg-gray-200 hover:bg-gray-400 cursor-pointer '>Open Model</button>
      </div>
     </div>
    </div>
  )
}

export default App
