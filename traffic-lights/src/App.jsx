import React from 'react'
import { useState, useEffect } from 'react'

const btns = [
  {colors:'red', duration:5000}, {colors:'yellow',duration:3000}, 
  {colors:'green', duration:2000}
]
const App = () => {
  const [activeIdx, setActiveIdx] = useState(0)
  const [timingCount, setTimingCount] = useState(btns[0].duration / 1000)

  //it resets the countdown
   useEffect(() => {
    setTimingCount(btns[activeIdx].duration / 1000)
    }, [activeIdx])

   useEffect(() => {
    if(timingCount === 0){
      setActiveIdx(prev => (prev +1) % btns.length)
      return
    }
   //when it hits 0 then color chsnge
    const timeOut = setTimeout(() => {
      setTimingCount(prev => prev - 1)
    }, 1000)

    return () => clearTimeout(timeOut)
   }, [timingCount])



  return (



    <div>
      <h1>Traffic Lights</h1>
      <hr />
      <div className="divs">
        {btns.map((elem, index)=>{
          return <div key={elem.colors} className='btn'
          style={{backgroundColor: index === activeIdx ? elem.colors : 'gray'}}
        ></div>
        })}
      </div>
      <h3>{timingCount}</h3>
    </div>
  )
}

export default App

