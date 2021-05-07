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
      // setTaskList ko hum na array isliyeh manayeh q ka jab 
      //...TaskList asa used ho gi to wo return jo array ka andar ho ga  
    setValue("")
    }
  }
  const handleKeyUp = (e) => {
    if (e.keyCode === 13){
      e.preventDefault();
      if (Value !== ""){
        const TaskDetails = {
          value : Value,
          id : Math.floor(Math.random()*1000),
        }
      setTaskList([...TaskList,TaskDetails])
      setValue("")
      }
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
        placeholder="ADD YOUR ACTIVITIES"
        onKeyUp={e => handleKeyUp(e)}
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
