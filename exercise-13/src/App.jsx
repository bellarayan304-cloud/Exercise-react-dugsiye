
import { useReducer } from "react"

const initialState={
  countA:0,
  countB:0
}

const reducer=(state, action)=>{
  switch(action.type){
    case 'A+':
       return {
        ...state,
        countA: state.countA + 1
      };
    case 'A-':
          return {
        ...state,
        countA: state.countA - 1
      };
      
      case 'B+':
        return{
          ...state,
          countB: state.countB +1
        };
      case 'B-':
        return{
          ...state,
          countB: state.countB -1
        };
        case 'rest':
          return initialState
}
}


function App(){
 
  const[state,dispatch] =useReducer(reducer,initialState)

  return(
  

    <div>
        <h1>Double Count</h1>

        <p>Counter A:{state.countA}</p>


      <button onClick={()=> dispatch({type:"A+"})} >A+</button>
      <button onClick={()=> dispatch({type:"A-"})} >A-</button>
    
       <p>Counter B:{state.countB}</p>
       <button onClick={()=> dispatch({type:"B+"})} >B+</button>
      <button onClick={()=> dispatch({type:"B-"})} >B-</button><br />
      
      <button onClick={()=> dispatch({type: "rest"})}>Rest both</button>

    </div>
    
  )
}
export default App;