import React from 'react'
import {useState} from "react"


const  Search = (props) => {
  let [Value,setValue] = useState("")
  let [TaskList,setTaskList] = useState([])
  const handleChange = (e) => {
    setValue(e.target.value)
  }

  const handleOnSubmit = () => {
    if (Value !== ""){
      const TaskDetails = {
        value : Value,
        id : Math.floor(Math.random()*1000),
      }
      setTaskList([...TaskList,TaskDetails])
    }
  }
  const handleDelete = (e,id) => {
    e.preventDefault()
    setTaskList(TaskList.filter(task => task.id !== id))
  }

  return (
    <div>
      <h1>Todo List</h1>
      <input 
        value={Value} 
        type="text" 
        onChange={e => handleChange(e)} 
        placeholder="Search Pictures"
      />
      <button onClick={handleOnSubmit}>ADD ITEM</button>
      {TaskList !== [] ? 
        <ul>{TaskList.map((task) => 
          (
            <li key={task.id}>{task.value} 
              <button onClick={e => handleDelete(e,task.id)}>delete</button> 
            </li>
          ))}
        </ul> 
      : null}
    </div>
  )
}

export default Search
