import { useState } from "react"

function App(){
  const[username,setUserName] = useState("")
  const[password,setPassword] =useState("")
  const[isLoggedOut, setIsLoggedOut] = useState(false)

  const loginhandale =()=>{
  if(username === "layla" && password ==="1234"){
    setIsLoggedOut(true)

  }else{
    alert("waa qalad")
  }
 
  }


  const logout = ()=>{
 setIsLoggedOut(false)

  setPassword("")
  setUserName("")
  }

  return(
    <div>
      <form action="">
     
      {isLoggedOut ? (
         <div>
        <h1>Welcome {username}!</h1>
      <button onClick={logout}>logout</button>
      </div>
   ):(  
      <div>
      
    <label htmlFor="username">UserName:</label>
    <input type="text"  id="username" placeholder="Enter Username" value={username} onChange={(e)=> setUserName(e.target.value)} required /><br />
    <label htmlFor="password">Password:</label>
    <input type="password"  id="password" placeholder="Enter Email" value={password} onChange={(e)=> setPassword(e.target.value)} required /><br />
    <button onClick={loginhandale}  >login</button>
  
    </div>
  )}
  </form>
    </div>
  )
}export default App