import React, { useState } from 'react'

const EditTodoForm = ({editTodo ,task}) => {
const [item, setItem] = useState(task.task)

const handleSubmit = e=>{
  e.preventDefault();
  editTodo(item , task.id)
    setItem("")
}
  return (
    <div>
    <form className='TodoForm' onSubmit={handleSubmit}>
      <input type='text' className='todo-input'
      placeholder='What is the Task Today?'
      value={item}
      onChange={(e)=> setItem(e.target.value)}/>
      <button type='submit'
      className='todo-btn'>Update Task</button>
      </form>  
    </div>
  )
}

export default EditTodoForm
