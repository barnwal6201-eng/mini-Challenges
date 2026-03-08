import React from 'react'
import { useState } from 'react'
const colourBtn =[
  {index:1},{index:2},{index:3},{index:4},{index:5}
]
const App = () => {
 const [coloridx, setColoridx] = useState(0)
 const [hover, setHover] = useState(0)

  return (
    <div>
      <h1>Star Rating</h1>
      <hr />
      <div className="btns">
       {
        colourBtn.map(function(elem){
          return <button
          key={elem.index}
          onMouseEnter={()=> setHover(elem.index)}
           onMouseLeave={()=> setHover(0)}
          onClick={()=> setColoridx(elem.index)}
          style={{
               color: elem.index <= (hover || coloridx) ? "gold":"black"
           } }
          
          >☆</button>
        })
       }
      
      </div>
    </div>
  )
}

export default App

