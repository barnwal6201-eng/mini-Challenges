import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
const App = () => {
 
  const [todos, setTodos] = useState([])
  const [page, setPage] = useState(1)

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/todos?_page=${page}&_limit=10`)
    .then((response) => {
      // APPEND new items, don't replace old ones 
      setTodos((oldTodos) => [...oldTodos, ...response.data])
      //                       ↑ keep old    ↑ add new
    })
    .catch((error) => {
      console.error(error)
  });
  }, [page])

  const loadMore =() => {
    setPage(page+1)
  }

  return (
    <div>
      <h1>Infinite Scroll(online)</h1>
      <hr />
      <p>Hover on Loading button to scroll more...</p>
      <div className="dataFlow">

        {todos.map((todo) => (
            <div className="box" key={todo.id}>
            {todo.title}
         </div>
        ))}
       
      </div>

      <button className='loading' 
      onMouseEnter={loadMore}
      >Loading</button>
     
    </div>
  )
}

export default App

