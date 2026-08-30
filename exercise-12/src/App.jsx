import { useState } from "react";
import "./App.css";
function App(){
  const[incremen, setInCremen] =useState(0)
 
  const increment=()=>{
    setInCremen(incremen +1)
    console.log(incremen)
  }
  const decrement=()=>{
    setInCremen(incremen -1)
    console.log(incremen)
  }
  
return(
  <div className="menu">
    <h1>Count: {incremen}</h1>
  <button      disabled={incremen === 0} onClick={decrement}>decrement</button>
  <button    onClick={increment}>increment</button>
</div>
)
}
export default App;