import React from 'react'
import { useState } from 'react'

 const mapping =[
  {player:'X'},{player:'O'},{player:'='}
 ];
  

 const checkWinner = (board) => {
  const lines = [
    // rows
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    // columns
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    // diagonals
     [0, 4, 8], [2, 4, 6]
  ];

  for (let [a, b, c] of lines) {
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a]; // 'X' or 'O'
    }
  }
  // no winner – check for draw (board full)
  if (board.every((cell) => cell !== "")) return "Draw";
  return null; // game still in progress
};

const App = () => {
  const [players, setPlayers] = useState(
    Array.from({length:3}, () => Array(3).fill(''))
  )
  const [isXTurn, setIsXTurn] = useState(true)
  const [currStatus, setCurrStatus] = useState('Playing')
  const [wins, setWins] = useState({X:0, O:0, Draw:0})

  const handleClick =(i, j) =>{
  if(currStatus !== 'Playing') return //it make buttons disable if anyone is winner
  if(players[i][j] !== '') return
  
   const newBoard = players.map(row => [...row])
   newBoard[i][j] = isXTurn ? 'X' : 'O'
   console.log(newBoard)
   setPlayers(newBoard)

   const flatBoard = newBoard.flat()
   const winner = checkWinner(flatBoard)

   if(winner){
    setCurrStatus(winner === 'Draw' ? 'Draw!' : `${winner} Wins!`)
    setWins(prev => ({
      ...prev,
      [winner]:prev[winner] +1
    }))
    
   }else{
   setIsXTurn(!isXTurn)
   }
  }

  const resetBtn = () =>{
     const newBoard =  Array.from({length:3}, () => Array(3).fill(''))
     setPlayers(newBoard)
     setCurrStatus('Playing')
     setIsXTurn(true)
  }
  return (
    <div>
      <h1>Tic Tac Toe</h1>
      <hr />
      <div className="container">
      <h3>Status: {currStatus}</h3>
      <div className="results">
       {mapping.map((elem)=>(
            <div key={elem.player} className="selectors">
           <div>{elem.player}</div>
           <div>
            {elem.player === '=' ? wins['Draw'] : wins[elem.player]} 
             {' '}Wins
           </div>
        </div>
          ))}
        
      </div>
      {players.map((rows, i) => (
        <div key={i} className="board">
        {rows.map((cell, j) =>(
          <button key={j} className="cells"
          onClick={()=>{
            handleClick(i, j)
          }}
          >{cell}</button>
        ))}
        </div>
      ))}
      <button className='reset' onClick={resetBtn}>Reset</button>
     
      </div>
    </div>
  )
}

export default App

