import { useReducer } from "react";

const initialState={
  step: 1,
 fristName:'',
 lastName:'',
 email:'',
 phone:''
//  next:''

}
const reduser=(state,action)=>{ 
switch (action.type){
  case "fristName":
  return{
    ...state,
    fristName: action.payload 
  }
  case "lastName":
    return{
      ...state,
      lastName: action.payload
    }
  case "email":
    return{
      ...state,
      email: action.payload
    }
  case "phone":
    return{
      ...state,
      phone: action.payload
    }
    case 'next':
      return{
        ...state,
        step: state.step +1
      }
    case 'back':
      return{
        ...state,
        step: state.step -1
      }
      case 'next':
      return{
        ...state,
        step: state.step +1
      }
      case 'Submit':
      return{
        ...state,
        step: state.step +1
      }

  default:
     return state;
}
};


function App(){
  const[state, dispatch]=useReducer(reduser,initialState)

  return(
   <div>

     <h1>Multi-Step regestration</h1>
      {state.step === 1 && (
        <>
    <h2>step {state.step} profile</h2>
    <form onSubmit={(e) => { e.preventDefault(); 
      dispatch({ type: "next" }); }}>
  <label htmlFor="userName">FristName</label>

  <input type="text" name="userName" 
  value={state.fristName}
   onChange={((e)=> dispatch({type:'fristName', payload: e.target.value}))} /><br />

  <label htmlFor="userName">lasttName</label>
  <input type="text" name="userName" 
   value={state.lastName} 
   onChange={((e)=> dispatch({type:'lastName', payload: e.target.value}))}/><br />
  <button type="submit">Next</button>
  
    </form>

       </>
)}

      {state.step === 2 && (
        <>

    <h2>step 2 profile</h2>
    <form>
      <label htmlFor="email">Email</label>
      <input type="email" name="email"
       value={state.email} 
   onChange={((e)=> dispatch({type:'email', 
   payload: e.target.value}))} /><br />
      <label htmlFor="tel">Phone</label>
      <input type="tel" 
      name="tel"
       value={state.phone} 
   onChange={((e)=> dispatch({type:'phone', payload: e.target.value}))} /><br />
      <button type="button" onClick={((e)=> dispatch({type: 'next'}))} >Next</button>
      <button type="button" onClick={((e)=> dispatch({type: 'back'}))}>Back</button>
    </form>
 </>
      )}
      {state.step === 3 && (
  <>
    <h2>Step 3 Review</h2>

   
      <p>First Name: {state.fristName}</p> 
   
    
      <p>Last Name:  {state.lastName}</p>
    

   
      <p>Email: {state.email}</p> 
    

    
      <p>Phone:  {state.phone}</p>
   
    <button
      type="button"
      onClick={() => dispatch({ type: "back" })}
    >
      Back
    </button>

    <button type="button" onClick={()=> dispatch({type:"Submit"})}>
      Submit
    </button>
  </>
)}
   </div>

  )
}
export default App;