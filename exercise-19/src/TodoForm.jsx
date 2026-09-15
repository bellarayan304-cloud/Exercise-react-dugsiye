import React, { useState, useContext  } from "react"
import  TodoContext from "./TodoContext"
export const TodoForm = () => {
    
    const [text, setText] = useState('')
    const{ dispatch } = useContext(TodoContext)

    const handaling = () => {
        if (text.trim()) {

            const newTodo = {
                id: Date.now(),
                text,
                completed: false
            };
            dispatch({ type: "add", payload: newTodo })
            setText("")
           
        }
    }
    return (
        <div>      
            
               <h1>Todo App</h1>
            <input type="text" placeholder="Todo-List" value={text} onChange={(e) => setText(e.target.value)} />
            <button onClick={handaling}>Add</button>
           
        </div>

    )



}