import { useState } from 'react'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'
import { useSelector } from 'react-redux'
import './App.css'

function App() {
  const todos = useSelector(state=>state.todos)

  return (
    <>
      <h1>Learn about redux Toolkit</h1>
      <AddTodo />
      <div>Todos</div>
      <ul className='list-none'>
        {
          todos.map((todo) => <Todos todo={todo} /> )
        }
      </ul>
      <Todos />
    </>
  )
}

export default App
