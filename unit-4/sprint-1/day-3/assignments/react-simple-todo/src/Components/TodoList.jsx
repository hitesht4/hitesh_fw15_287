import React from "react";

import {nanoid} from 'nanoid';
import { TodoItem } from "./TodoItem";
import styles from './todo.module.css'

export const TodoList =()=>{
  const [Task,setTask]=React.useState("")
  const [Todo,setTodo]=React.useState([])
  const [IsLoggedin,setIsLoggedin]=React.useState(false)
  const handleClick=()=>{
      let taskObj={
          title:Task,
          id:nanoid(),
          status:false,
      }
    setTodo([...Todo,taskObj])
  }

  const handleChange=(e)=>{
     
   
    setTask(e.target.value)

  }

  const handleDelete =(id)=>{
     let newTodo= Todo.filter((e)=>e.id != id)

     setTodo(newTodo)

  }
  const handleLoggein=()=>{
    
    setIsLoggedin(true);

  }
  const handleloggedout=()=>{

    setIsLoggedin(false)
  }
  
   return (
       
       <>
        {IsLoggedin ? <>
            <button onClick={handleloggedout} className={styles.loginbtn}>Logout</button>
         <h1>TODO LIST </h1>
        <input className={styles.inputTag} type={"text"} placeholder="Write Something" value={Task} onChange={handleChange}/>
        <button className={styles.addbtn} onClick={handleClick}>+</button>
        {
          Todo.map((e)=>{
              return <TodoItem key={e.id} {...e} handleDelete={handleDelete}/>
          })
        }  </> :<h3>You are not logged in please, <button className={styles.loginbtn} onClick={handleLoggein}>Login</button></h3>
       
    }
       
       
       </>
   )
    
}


