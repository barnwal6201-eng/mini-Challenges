import React,{useState} from 'react'

const Config = ({config, setConfig}) => {

  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className='w-70 text-white '>
         <h3 
        onClick={() => setIsOpen(!isOpen)}
        className='text-center bg-gray-700 cursor-pointer select-none h-8'
      >
        {isOpen ? '▲' : '▼'} Config
      </h3>
       { isOpen && <div  className='bg-black text-white h-20 w-70 flex flex-col absolute'>
          <div className='mt-2'>
            <label>Group Size :</label>
          <input 
          type="range" 
          min="2"
           max="4"
           value={config.groupSize}
           onChange={(e) => setConfig({...config, groupSize: Number(e.target.value)})}
           className='ml-4 h-2'
            />
          </div>
          
          <div>
            <label>Items Count :</label>
          <input 
          type="range" 
          min="4"
           max="12"
           value={config.itemsCount}
           onChange={(e) => setConfig({...config, itemsCount: Number(e.target.value)})}
            className='ml-4 h-2'
            />
          </div>

          <div>
            <label>Columns:</label>
          <input 
          type="range" 
          min="2"
           max="4"
           value={config.columns}
           onChange={(e) => setConfig({...config, columns: Number(e.target.value)})}
            className='ml-4 h-2'
            />
          </div>

        </div>}
    </div>
  )
}

export default Config
