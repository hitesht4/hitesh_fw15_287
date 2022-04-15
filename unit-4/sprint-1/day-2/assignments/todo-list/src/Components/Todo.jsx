import { useState } from "react";

import styles from "./Todo.module.css"

export const Todo = ()=>{
    const [Task,setTask]=useState("")
    
    const [Todo,setTodo]=useState([])


    const handleChange =(e)=>{
        
        setTask(e.target.value)

    }
    const handleClick= ()=>{
        setTodo([...Todo,Task])

       
    }
     console.log(Todo,"Todo")
    return (

        <>
         <h1>TODO LIST</h1> 
        <input className={styles.input_tag} type= {"text"} value={Task} placeholder="Write Something" onChange={handleChange}/>
        <button className={styles.button} onClick={handleClick}>+</button>
        {Todo.map((elem)=>{
             return  <h2 className={styles.output_tag}>{elem}</h2>
          
        })

        }
        
        </>
    )


}

