import React from 'react'
import { useState } from 'react'

const App = () => {

  const [colors, setColors] = useState(
    Array.from({length:8}, () => Array(8).fill(''))
  )
  const rows = 8
  const cols = 8

  const grid = Array.from({length: rows}, (_, i) =>
    Array.from({length: cols}, (_, j) => `${i}-${j}`)
  )
   
  const handleClick = (i, j) => {
         console.log(`click ${i}, ${j}`)
         const newColors =  Array.from({length:8}, () => Array(8).fill(''))
        //ye upar wala code pichhla kuchh bhi store nhi karta hai

        newColors[i][j] =  'red'
         
         let r = i - 1, c = j - 1
         while (r >= 0 && c >= 0) { newColors[r][c] = 'red'; r--; c-- }

         r = i + 1; c = j + 1
        while (r < 8 && c < 8) { newColors[r][c] = 'red'; r++; c++ }

        r = i - 1; c = j + 1
         while (r >= 0 && c < 8) { newColors[r][c] = 'red'; r--; c++ }

         r = i + 1; c = j - 1
         while (r < 8 && c >= 0) { newColors[r][c] = 'red'; r++; c-- }

        setColors(newColors)
      }
      
  return (
    <div>
      <h1>Chess Board</h1>
      <hr />
      <p>Click on any cell to color diagonally</p>
      
      {grid.map((rows, i) => (
        <div key={i} className='board'>
          {rows.map((cell, j) => (
            <button key={j} className='cells'
            style={{backgroundColor: colors[i][j] !== ''?
              colors[i][j]:
              (i+j )%2 !== 0 ? 'black': 'white'
            }}
            onClick={() => {
              handleClick(i, j)            
            }}
            ></button>
          ))}
        </div>
      ))
      }
    </div>
  )
}

export default App

