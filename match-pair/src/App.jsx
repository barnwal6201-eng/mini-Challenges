import React from 'react'
import { useState } from 'react'

const emojis = ['😀', '😂', '🔥', '❤️', '👍', '🎉', '😎', '🌟']

//elements get swap each time
const shuffle = (arr) => {
  const array = [...arr]
  for(let i = array.length -1; i > 0; i--){
    const j = Math.floor(Math.random()* (i+1));
    [array[i], array[j]] = [array[j], array[i]]
  }
  return array
}

const createCards =() => 
  shuffle([...emojis, ...emojis]).map((emoji, idx) => ({
    id: idx, emoji,
    isFlipped: false,
    isMatched: false
  }))


const App = () => {
  const [count, setCount] = useState(0)
  const [cards, setCards] = useState(createCards)
  const [selected, setSelected] = useState([])
  const [isChecking, setIsChecking] = useState(false)

  //it checks is all cards are matched yet or not
  const allMatched = cards.every((card) => card.isMatched)

  const grid = Array.from({length:4}, (_, i) =>
  Array.from({length:4}, (_, j) => i*4+j)//store index num instead of string
  )

  const clickHandler = (cardIndex) => {
    const card = cards[cardIndex]

    if(isChecking || card.isFlipped || card.isMatched) return

    // flip clicked card
    const updatedCards = cards.map((c) =>
      c.id === cardIndex ? { ...c, isFlipped: true } : c
    )
    setCards(updatedCards)

    const newSelected = [...selected, card]
    setSelected(newSelected)
     setCount(count+1)
    if(newSelected.length === 2){
     
      setIsChecking(true)

      if(newSelected[0].emoji === newSelected[1].emoji){
        // match!
        setCards(prev =>
          prev.map((c) =>
            c.emoji === newSelected[0].emoji ? { ...c, isMatched: true } : c
          )
        )
        setSelected([])
        setIsChecking(false)
      } else {
        // no match — flip back after 1 second
        setTimeout(() => {
          setCards(prev =>
            prev.map((c) =>
              c.id === newSelected[0].id || c.id === newSelected[1].id
                ? { ...c, isFlipped: false }
                : c
            )
          )
          setSelected([])
          setIsChecking(false)
        }, 1000)
      }
    }
  }

  const resetHandler = () => {
    setCount(0)
    setCards(createCards())
    setSelected([])
    setIsChecking(false)
  }
  
  return (
    <div>
      <h1>Match Pair</h1>
      <hr />
      {allMatched && <h2>🎉 You Win!</h2>}

      {grid.map((row, i) => (
        <div key={i} className='board'>
          {row.map((cardIndex, j) => {
            const card = cards[cardIndex]
            return(
            <button key={j} className='cells'
            onClick={() => 
              clickHandler(cardIndex)}
             style={{
                  backgroundColor: card.isMatched
                    ? '#4caf50'
                    : card.isFlipped
                    ? '#2c3658'
                    : ''  // empty = your CSS yellow color shows
                }}
            >
              {card.isFlipped || card.isMatched ? card.emoji : ''}
            </button>
            )
})}
        </div>
      ))}
      <button onClick={resetHandler}>Reset</button>
      <h2>Attemps: {count}</h2>
    </div>
  )
}

export default App

