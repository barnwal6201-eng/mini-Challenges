import React, { useState, useEffect } from 'react'
import { connectedTwoWords, connectedWords } from './data'
import Config from './config'

const App = () => {

  const [config, setConfig] = useState({
      itemsCount: 5,
      groupSize: 2,
      columns: 2
    });
    
    const shuffle = (arr) => {
      for(let i = arr.length - 1; i >= 0; i--){
        let idx = Math.floor(Math.random()*i);
        [arr[i], arr[idx]] = [arr[idx], arr[i]];
      }
      return arr;
    };
    
    const sourceData = connectedWords.get(config.groupSize)
    const data = sourceData.slice(0, config.itemsCount).flat(Infinity);
    const shuffled = shuffle(data);

  const handleClicks = (idx) => {
  const copy = new Set([...selectedWords]);

  if (selectedWords.has(idx)) {
    copy.delete(idx);
    setSelectedWords(copy);
    return;
  }

  copy.add(idx); 

  if (copy.size === config.groupSize) {

    let selectedArr = [...copy].map(i => words[i]);

  
    let found = false;
    connectedWords.get(config.groupSize).slice(0, config.itemsCount).forEach((pair) => {
     if (selectedArr.every(w => pair.includes(w))) {
       found = true;
     }
    });

    if (found) {
      setError("bg-green-100"); 
      setAttempts(attempts+1);
      setTimeout(() => {
        setWords(words.filter((_, i) => !copy.has(i))); 
        setSelectedWords(new Set());
        setError("bg-blue-100");
      }, 2000); 
    } else {
      setError("bg-red-100"); 
      setAttempts(attempts + 1);
      setTimeout(() => {
        setSelectedWords(new Set()); 
        setError("bg-blue-100");
      }, 2000);
    }
  }

  setSelectedWords(copy);
};

useEffect(() => {
  const sourceData = connectedWords.get(config.groupSize);
  const newData = sourceData.slice(0, config.itemsCount).flat();
  setWords(shuffle([...newData]));
  setSelectedWords(new Set());
}, [config]);
  

    const handleReset = () => {
      const newShuffled = shuffle(connectedWords.get(config.groupSize).slice(0, config.itemsCount).flat(Infinity));
      setWords(newShuffled);
      setAttempts(0);
      setSelectedWords(new Set());
    }

    const [words, setWords] = useState(shuffled);
    const [attempts, setAttempts] = useState(0);
    const [selectedWords, setSelectedWords] = useState(new Set());
    const [error, setError] = useState("bg-blue-100");
    
    const colsMap = {
    2: 'grid grid-cols-2',
     3: 'grid grid-cols-3',
     4: 'grid grid-cols-4',
     }

  return (
    <div>
      <div>
      <h1 className='text-center text-2xl font-semibold mb-5 mt-2'>Word Connect</h1>
      <Config config={config} setConfig={setConfig} />
      </div>
      
      <hr />

      <p className='font-semibold text-xl text-center mt-4'>Connect group of <span>{config.groupSize}</span> words by clicking on related words</p>

       <div className={`${colsMap[config.columns]} mt-8 lg:ml-80 sm:ml-2 md:ml-2 sm:grid sm:grid-cols-3`}>
        {words.map((word, idx) => (
          <button 
          key={word}
          disabled={selectedWords.size === config.groupSize}
          onClick={() => handleClicks(idx) } 
          className={`h-10 w-40 border rounded-xl mb-5 ${selectedWords.has(idx) ? error : "bg-white"}`}
          
          >
            {word}
            </button>
        ))}
       </div>
     
      <div className='flex flex-col justify-center items-center'>
       <p className='text-center mt-4'>Attempts : <strong>{attempts}</strong></p>
       <button 
       onClick={handleReset}
       className='mt-4 border-2 rounded-xl h-10 w-25 bg-blue-600 cursor-pointer text-white text-xl hover:bg-blue-950' >Reset</button>
       </div>
    </div>
  )
}

export default App
