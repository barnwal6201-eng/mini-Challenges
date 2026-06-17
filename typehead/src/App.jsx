import React, { useState } from 'react'
import { suggestionsList } from './suggestions';

const App = () => {

 const [inputs, setInputs] = useState('');
 const [matched, setMatched] = useState([]);

 const suggestions = suggestionsList.map((word) => word.toLowerCase());

 const handleSuggestions = (e) => {
  const value = e.target.value;
  setInputs(value);
    
   if(value === ''){
    setMatched([]);
    return;
   }

   const filtered = suggestions.filter((word) => 
   word.toLowerCase().startsWith(value.toLowerCase())
   );

  setMatched(filtered);
 }

 const deleteHandle = () => {
  setInputs('');
  setMatched([]);
 }

  return (
    <div>
      <h1 className='text-2xl text-center font-semibold mt-3 mb-3'>Typeahead (offline)</h1>
      <hr />

      <p className='text-center mt-2'>Use up & down arrows to navigate suggestions</p>
      <div className='flex justify-center mt-4'>
        <div className='relative'>
        <input
         type="text"
         value={inputs}
         onChange={(e)=>handleSuggestions(e)}
         placeholder='Search for country'
         className='h-12 border w-130 px-4 pr-10 focus:outline-sky-500 ' />
         {inputs && (
        <button 
        onClick={deleteHandle}
        className='absolute -translate-y-1/2 right-2 top-1/2 text-red-500 font-bold cursor-pointer'
         >✕</button>
         )}
         </div>
      </div>

      {matched.length > 0 ? (
        <div className='flex justify-center items-center mt-2'>
          <ul className='flex flex-col gap-2 '>
          {matched.map((suggestion, index) => (
            <li 
            key={index}
            onMouseEnter={()=>setInputs(suggestion)}
            className='bg-yellow-200 h-10 w-120 px-2 py-2 cursor-pointer hover:border-2 hover:bg-yellow-500'
            >{suggestion}</li>
          ))}
          </ul>
        </div>
      ): ''}
    </div>
  )
}

export default App
