import { useState } from "react"

function App(){
  const [isVisible, setVisible] =useState(true)
  const toggle =()=>{
    setVisible(!isVisible)
  }
  return(
    <>
    
     <h3 >The button is 
         <span> {isVisible ?  'On' : 'Off'}
</span>
</h3>
    
   
       
    <button onClick={toggle}> {isVisible ? 'On ' : 'Off '}Turne</button>
    
    </>
 
    
  )
}
export default App;