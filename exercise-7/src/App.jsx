import { useEffect, useState } from "react"

function app (){
  const [tame, setTame] =useState({X:0,Y:0})
  useEffect(()=>{
    const handleMouse =(e)=>{
       setTame({
      X:e.clientX,
      Y:e.clientY
      
    })
    
    }
    console.log("llll")
   window.addEventListener("mousemove",handleMouse)
   return()=>{
       window.removeEventListener("mousemove",handleMouse)

   }
  },[])
  return(
    <div>
      <p>mouse x :{tame.X}px</p>
      <p>mouse y :{tame.Y}px</p>
    </div>
  )
}
export default app;