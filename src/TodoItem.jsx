import React from "react";

function TodoItem({ id, title, completed, toggleTodo, deleteToDo}) {
  return (
    <div >
      <li className="flex-display">
        <input
          type="checkbox"
          checked={completed}
          onChange={(e) => toggleTodo(id, e.target.checked)}
        />
    
        <div className="text-capitalize">{title}</div>
        <button className="btn btn-danger" onClick={() => deleteToDo(id)}>
        <i class="bi bi-trash"></i>
        </button>
      </li>
      <hr />
    </div>
  );
}

export default TodoItem;
