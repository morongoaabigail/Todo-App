import React, { useState } from 'react';


const NewTodoForm = ({ AddToDo }) => {
  const [newItem, setNewItem] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (newItem === "") return;
    AddToDo(newItem);

    setNewItem("");
  }

  return (
    
          <form onSubmit={handleSubmit} className='new-item-form'>
            <div className='form-row'>
              <label htmlFor="item">New Item</label>
              <input type="text" value={newItem} id="item" onChange={(e) => setNewItem(e.target.value)} className='form-control' />
            </div>
            <button className='btn btn-primary mt-2' type='submit' style={{marginBottom:"50px" , width:"100%"}}>Add</button>
          </form>
  )
}

export default NewTodoForm;