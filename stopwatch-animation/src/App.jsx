import React from 'react'
import { useState, useEffect, useRef } from 'react'

   //format - MM:SS:ms
  const formatTime = (ms) => {
    const min = String(Math.floor(ms/60000)).padStart(2, "0")
    const sec = String(Math.floor((ms%60000)/1000)).padStart(2, "0")
    const milisec = String(Math.floor(ms % 1000)).padStart(3, "0")
    return `${min}:${sec}:${milisec}`;
  }
const App = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const startTimeRef = useRef(null);
  const elapsedTimeRef = useRef(0);
  const animationFrameRef = useRef(null);

  const update = () => {
    const now = performance.now();
    const newElapsed = now - startTimeRef.current + elapsedTimeRef.current;
    setTime(Math.floor(newElapsed));
    animationFrameRef.current = requestAnimationFrame(update);
  };
  const startHandler = () => {
    if(isRunning) return;
    setIsRunning(true);
    startTimeRef.current = performance.now();
    animationFrameRef.current = requestAnimationFrame(update);
  };
  const stopHandler = () => {
    if(!isRunning) return;
    setIsRunning(false);
    cancelAnimationFrame(animationFrameRef.current);
    elapsedTimeRef.current += performance.now() - startTimeRef.current;
  };
  const resetHandler = () => {
    cancelAnimationFrame(animationFrameRef.current);
    setIsRunning(false);
    setTime(0);
    elapsedTimeRef.current = 0;
    startTimeRef.current = null;
  };
  //cleanup animation frame
  useEffect(() => {
    return () => cancelAnimationFrame(animationFrameRef.current);
  },[]);

  return (
    <div>
       <h1 className='text-2xl text-center m-2'>Stopwatch</h1>
      <hr />
      <div className='bg-gray-300 h-70 w-70 flex gap-2 flex-col justify-center items-center m-auto mt-2 rounded-full'>
          <h2 className='font-bold text-5xl text-purple-700'>Stopwatch</h2>
          <h2 className='font-bold mt-2 text-4xl text-red-600'>{formatTime(time)}</h2>
          <div className='flex gap-2 mt-3'>
            <button className='h-9 w-13 bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl cursor-pointer'
            onClick={startHandler}
            >start</button>
            <button className='h-9 w-14 bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl cursor-pointer'
            onClick={stopHandler}
            >Pause</button>
            <button className='h-9 w-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl cursor-pointer'
            onClick={resetHandler}
            >Restart</button>
          </div>
      </div>
    </div>
  )
}

export default App

