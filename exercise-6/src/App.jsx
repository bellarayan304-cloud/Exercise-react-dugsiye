import { useEffect, useState } from "react"


function App() {
  const [name, setName] = useState("")
  const[salan, setSalan] =useState("Hello")

  useEffect(() => {
    document.title = `${salan} ${name}`
    console.log(name)
  }, [name,salan])


  return (
    <div>
      <h1>Enter Your Name</h1>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      <h1>Choose A Greeting</h1>
    <input type="text" value={salan} onChange={(e)=> setSalan(e.target.value)} />
    </div>
  )
}
export default App;