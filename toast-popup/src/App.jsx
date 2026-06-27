import React, { useState } from 'react'

const App = () => {

  const [messageDirX, setMessageDirX] = useState("left");
  const [messageDirY, setMessageDirY] = useState("top");
  const [messageType, setMessageType] = useState("success");
  const [message, setMessage] = useState("This is a toast message!");
  const [timer, setTimer] = useState(3);
  const [toasts, setToasts] = useState([]);

  const toastStyles = {
    normal: "bg-gray-700",
    success: "bg-green-600",
    error: "bg-red-600",
    warning: "bg-yellow-500",
    info: "bg-blue-500",
  };

  const positions = {
    "top-left": "top-4 left-4",
    "top-right": "top-4 right-4",
    "bottom-left": "bottom-4 left-4",
    "bottom-right": "bottom-4 right-4"
  };


 const showToast = () => {
  const id = crypto.randomUUID();

  const newToast = {
    id,
    message,
    x: messageDirX,
    y: messageDirY,
    type: messageType,
  };

  setToasts((prev) => [...prev, newToast]);

  setTimeout(() => {
    
    setToasts((prev)=> prev.filter((t)=> t.id !== id));

  }, timer*1000);
 };

 
 const removeToasts = (id) => {
  setToasts((prev) => prev.filter((t) => t.id !== id))
 }

  
  return (
    <div>
      <h1 className='text-center text-3xl font-semibold mb-3 mt-3'>Toast Popup</h1>
      <hr />

      <div className=' flex justify-center items-center mt-8 flex-col gap-6'>
        
          <select
          value={messageDirX}
          onChange={(e)=>setMessageDirX(e.target.value)}
          className='w-60 h-10 border lg:w-96 lg:h-12'>
          <option value="left">Left</option>
          <option value="right">Right</option>
        </select>
        
       
         <select
         value={messageDirY}
         onChange={(e)=>setMessageDirY(e.target.value)}
         className='w-60 h-10 border lg:w-96 lg:h-12'>
          <option value="top">Top</option>
          <option value="bottom">Bottom</option>
        </select>
      
       
          <select 
          value={messageType}
          onChange={(e)=>setMessageType(e.target.value)}
          className='w-60 h-10 border lg:w-96 lg:h-12'
          >
          <option value="normal">Normal</option>
          <option value="success">Success</option>
          <option value="error">Error</option>
          <option value="warning">Warning</option>
          <option value="info">Info</option>
        </select>

       
        <input 
        type="text"
        value={message}
        onChange={(e)=>setMessage(e.target.value)}
        className='w-60 h-10 border lg:w-96 lg:h-12'
        />


       <div className='flex gap-2'>
        <label>Duration</label>
         <input 
        type="range"
        min={3}
        max={10}
        value={timer}
        onChange={(e)=>setTimer(Number(e.target.value))}
        className='mt-1'
        />
       </div>


       <button 
       onClick={showToast}
       className='border h-10 w-30 mt-3 bg-blue-600 text-white text-xl font-semibold hover:bg-blue-800 cursor-pointer'
       >Show Toast</button>

      </div>


      {toasts.map((toast, index) => (
          <div
        key={toast.id}
        style={{
          [toast.y]: `${16 + index * 60}px`,
          [toast.x]: "16px",
        }}
        className={`fixed ${toastStyles[toast.type]} text-white px-4 py-3 border flex items-center gap-3 min-w-60 max-w-sm z-50`}
        >
          <span className='flex-1'>{toast.message}</span>
          <button
          onClick={()=> removeToasts(toast.id)}
           className="font-bold cursor-pointer"
          >X</button>
        </div>
        
      ))}
      
    </div>
  )
}

export default App
