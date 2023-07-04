import React, { useState } from 'react'

const TodoForm = ({addTodo}) => {
const [item, setItem] = useState("")
const [desc ,setDesc] =useState("")

const handleSubmit = e=>{
  e.preventDefault();
  addTodo(item, desc)
    setItem("")
    setDesc("")
}
  return (
    <div>
    <form className='TodoForm' onSubmit={handleSubmit}>
      <input type='text' className='todo-input'
      placeholder='What is the Task Today?'
      value={item}
      onChange={(e)=> setItem(e.target.value)}/>

     <input type='text' className='todo-input'
      placeholder='Explain in Detail'
      value={desc}
      onChange={(e)=> setDesc(e.target.value)}/>

      <button type='submit' className='todo-btn'>Add Task</button>
      </form>  
    </div>
  )
}

export default TodoForm
