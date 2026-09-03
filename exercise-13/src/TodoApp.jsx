import { useState, useReducer} from "react"


const initialState=[
    // {id:1, title:"todo 1", completed:true},
    // {id:2, title:"todo 2", completed:false},
    // {id:3, title:"todo 3", completed:false},
    // {id:4, title:"todo 4", completed:false}
]

const reducer=(state,action)=>{

    switch(action.type){

         case 'add':
    return [...state, action.payload]
    case 'toggle':
        return state.map((todo)=>todo.id=== action.payload ? {...todo,completed: !todo.completed}:todo)
        case 'delete': 
        return state.filter((todo)=>todo.id !== action.payload);

        default: return state;

    }
   

}



const TodoApp =()=>{

   const [state, dispatch] = useReducer(reducer, initialState);
    const[text, setText] =useState("")

    const handaling =()=>{
         if(text.trim()){

              const newTodo ={
                id :Date.now(),
                text,
                completed:false
                
           
        }

        dispatch({type: "add", payload: newTodo})
        setText("")
        console.log(state)
    }

         }
      
    
    return(
        <div>
             <h1>Todo App</h1>
             <input type="text" placeholder="Todo-List" value={text} onChange={(e)=>setText(e.target.value)}/>
             <button onClick={handaling}>Add</button>
             <ul>
                {
                    state.map((todo)=>
                    <li key={todo.id}>
                      
                        <span 
                          style={{textDecoration: todo.completed ? 'line-through':"none"}}
                        onClick={()=> dispatch({type:"toggle", payload:todo.id})}>{todo.text}</span>
                        <button onClick={()=> dispatch({type:"delete", payload:todo.id} )}>Delete</button>
                        </li>
                    
                    )
                }
             </ul>
        </div>
       
    )
}
export default TodoApp




