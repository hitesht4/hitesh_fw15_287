

import React from "react";

import styles from  './todoitem.module.css'

export const TodoItem=(props)=>{
  
    const {title,id,status,handleDelete}=props 
    return (
        <>
        <div className={styles.output}>
        <h2 className={styles.outputTag}>{title}</h2>
        <button className={styles.deletebtn} onClick={()=>handleDelete(id)}> Delete</button>
        </div>
        
        </>
    )

}