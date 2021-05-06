import React from 'react'
import {useState} from "react"


const  Search = (props) => {
  let [Value,setValue] = useState("")
  let [TaskList,setTaskList] = useState([])
  console.log(...TaskList)
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
      // setTaskList ko hum na array isliyeh manayeh q ka jab 
      //...TaskList asa used ho gi to wo return jo array ka andar ho ga  
    }
  }
  const handleDelete = (e,id) => {
    e.preventDefault()
    setTaskList(TaskList.filter(task => task.id !== id))
  }
  console.log(TaskList)
  return (
    <div>
      <h1>Todo List</h1>
      <input 
        value={Value} 
        type="text" 
        onChange={e => handleChange(e)} 
        placeholder="ADD YOUR ACTIVITIES"
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
