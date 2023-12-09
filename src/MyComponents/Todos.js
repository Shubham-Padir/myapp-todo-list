import React from 'react'
import {Todoitem} from '../MyComponents/Todoitem'

export const Todos = (props) => {
  let myStyle = {
    minHeight:"43vh",
  }
  return (
     <div className="container" style={myStyle}>
     <h3 className ="text-center my-3">Todos list</h3>
     {props.todos.length===0? "No Todos to display":
     props.todos.map((todo)=>{
      return(
        <>
       <Todoitem todo={todo} key={todo.sno} onDelete={props.onDelete}/>  
      <hr/>
      </>
      )
     })
     }
      
  
     </div>
  )
}

export default Todos



