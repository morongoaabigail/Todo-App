import React, { useEffect, useState } from 'react'
import NewTodoForm from './NewTodoForm'
import TodoList from './TodoList'
import "./app.css"


const App = () => {

  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem("ITEMS")
    if (localValue === null) return []

    return JSON.parse(localValue)
  })

  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todos))
  }, [todos])



  function toggleTodo(id, completed) {
    setTodos(currentTodos => {
      return currentTodos.map(todo => {
        if (todo.id === id) {
          return { ...todo, completed }
        }

        return todo
      })
    })
  }

  function deleteToDo(id) {
    setTodos(currentTodos => {
      return currentTodos.filter(todos => todos.id != id)
    })
  }

  function AddToDo(title) {
    setTodos(currentTodos => {
      return [...currentTodos, { id: crypto.randomUUID(), title, completed: false },]
    })
  }

  return (
    <>
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-6 p-3 bg-light shadow-sm">
            <h1 className='bg-dark text-light text-center mb-3'>TODO-APP</h1>
            <NewTodoForm AddToDo={AddToDo} />
            <h4>Todo List</h4>
         
            <TodoList todos={todos} deleteToDo={deleteToDo} toggleTodo={toggleTodo} />
          </div>
        </div>
      </div>
    </>
  )
}

export default App