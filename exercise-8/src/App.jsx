import { useEffect } from "react"
import { useState } from "react"

function App(){
    const [time,setTime] =useState(0)
    const [running,setRunning] =useState(false)
    const [initial,setInitialTime] =useState(0)
    useEffect(()=>{

        let TimerId;

        if( running ){
           
        TimerId  =  setInterval (() => {
            setTime((prev)=>prev -1 )
            
        }, 1000);
        }
          if (time === 0) {
      setRunning(false)
          }
     
return ()=> clearInterval(TimerId)
    },[running, time])

 const HandleStart=()=>{
    if(time > 0){
        setRunning(true)
    }
            

    }
 const HandleStope=()=>{
            setRunning(false)

    }
 const HandleReset=()=>{
            setRunning(false)
            setTime(initial)

    }
    const handlinInput=(e)=>{
        const value = Number(e.target.value)
        
        setTime(value)
    setInitialTime(value)
    }
    
    return(
        <div>
            <h1>Countdown Timer</h1>
            <p>Set Timer(second): <input type="number" 
            value={time}
            onChange={ handlinInput }  /></p><br />
            <p>Time Left:{time}</p> <br />
            <button disabled={running} onClick={HandleStart}>Start</button>
            <button disabled={!running} onClick={HandleStope}>Stop</button>
            <button onClick={HandleReset} >Reset</button>
        </div>
    )
}
export default App