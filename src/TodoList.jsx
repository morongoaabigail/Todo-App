
import React from 'react'
import TodoItem from './TodoItem'

function TodoList({todos,deleteToDo, toggleTodo }) {
  return (
    <div>
       <ul className='list'>
        <p className='text-center'>{todos.length === 0 && "No Todo's"}</p> 
        {todos.map(todo => {
          return (
            <TodoItem {...todo} key={todo.id} deleteToDo={deleteToDo} toggleTodo={toggleTodo}/>
            
          )
          
        }) 
    }
      </ul>
    </div>
  )
}

export default TodoList
