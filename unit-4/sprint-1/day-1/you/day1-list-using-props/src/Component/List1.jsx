



import './List1.css'



export const List1 =(props)=>{

    return (
    <>
    <ul>
      <h1 className="headerOfList"> {props.head}</h1>
          <li>{props.l1}</li>
          <li>{props.l2}</li>
          <li>{props.l3}</li>
          <li>{props.l4}</li>
    </ul> 
    </>
    )
}

export const List2 =(props)=>{

    return (
    <><ul>
        <h1 className="headerOfList"> {props.head}</h1>
            <li>{props.l1}</li>
            <li>{props.l2}</li>
            <li>{props.l3}</li>
            <li>{props.l4}</li>
      </ul> </>
      )
}

export const Joinbtn= (props)=>{
  
    return <button className="btn">{props.text}</button>

}

export const Settingbtn= (props)=>{
  
    return <button className="s-btn">{props.text}</button>

}

export const Loginbtn= (props)=>{
  
    return <button className="L-btn">{props.text}</button>

}

export const Contactbtn= (props)=>{
  
    return <button className="c-btn">{props.text} </button>

}

export const Searchbtn= (props)=>{
  
    return <button className="se-btn">{props.text}</button>

}

export const Helpbtn= (props)=>{
  
    return <button className="h-btn">{props.text}</button>

}
export const Homebtn= (props)=>{
  
    return <button className="ho-btn">{props.text}</button>

}
export const Downloadbtn= (props)=>{
  
    return <button className="D-btn">{props.text}</button>

}


