
import { useState } from "react"
const shopping =()=>{




  const [shope, setShope] = useState([])
  const [Value, setValue] = useState("")
  const [price, setPrice] = useState("")
const handling = ()=>{

const newTodo   = {
  id:crypto.randomUUID(),
  text:Value,
  price:price,
  compelet:false
  

  
}
// console.log(handling)
   setShope([...shope,newTodo])
// //    console.log(shope)
setValue("");
    setPrice("");

}

  return(
    <>
    <h2>shopping card</h2>
    <input type="text" placeholder="prodect Name" onChange={(Event) => setValue(Event.target.value)}  value={Value} />
    <input type="number" placeholder="price"onChange={(Event) => setPrice(Event.target.value)}  value={price} />
    <button onClick={handling}>Add</button>
    <ul>
      {
      
        shope.map( shope =>(
        <li>{shope.text}</li>,
         <li key={shope.id} >
             {shope.text}  ${shope.price}
         </li>
        
        
      
      ))
    }
    </ul>
    </>
  )
}
export default shopping;