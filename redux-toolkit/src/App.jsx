import React from 'react'
import AddTodo from './components/AddTodo'
import Todos from './components/Todo'

const App = () => {
  return (
    <>
      <div>Redux Toolkit Todo</div>
      <AddTodo />
      <Todos/>
    </>
  )
}

export default App