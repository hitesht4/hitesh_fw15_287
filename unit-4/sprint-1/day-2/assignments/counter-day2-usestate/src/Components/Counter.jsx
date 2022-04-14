import React, { useState } from "react";

import styles from './counter.module.css'

 export const Counter =(props)=>{
 
   

    const [count,setCount]=useState(props.num);
    
    const handleInc= (value)=>{
        setCount(count+value)
      
    }

    const handleDec =(value)=>{
        setCount(count-value)
    }

    const handleMul=(value)=>{
        setCount(count*value)
    }

    return(
        <React.Fragment>
         <h1 className={styles.header}>Counter</h1>
        <h1 className={count%2===0 ? styles.even : styles.odd}>{count}</h1>
        
        <button onClick={()=>handleInc(1)}>Increment</button>
        <button onClick={()=>handleDec(1)}>Decrement</button>
        <button onClick={()=>handleMul(2)}>Double</button>

        </React.Fragment>
    )

   
}

