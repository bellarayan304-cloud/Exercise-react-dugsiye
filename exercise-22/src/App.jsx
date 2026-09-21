import { useState } from "react"

function App(){
  const [formData, setFormData] =useState({
    username:"",
    email:"",
    password:""
  })
  const [isCheck, setIsCheck]=useState(false)
  const [select, setSelect]=useState("")
  const handleSubmit=(e)=>{
    e.preventDefault();

    if(!isCheck){
      alert("please the checked ")
      return
    }
    if(select == ""){
      alert("please choose select optional")
      return
    }
     console.log(isCheck)
     console.log(select)

  }
  const handleChange=(e)=>{
    const {name,value}=e.target
    console.log({name})
    console.log({value})
    setFormData((preData)=>({...preData, [name]:value}))
  }
  const handleCheck=(e)=>{
    setIsCheck(e.target.checked)
   
  }

  return(
    <div>
      <form onChange={handleSubmit}>
        <input type="text" name="username" placeholder="Enter The Name" value={formData.username} onChange={handleChange} />
        <input type="text" name="email" placeholder="Enter The Email" value={formData.email} onChange={handleChange} />
        <input type="password" name="password" placeholder="Enter The password" value={formData.password} onChange={handleChange} />
        <label htmlFor="">checkbox</label>
        <input type="checkbox" checked={isCheck} onChange={handleCheck} />
        <select value={select} onChange={(e)=> (setSelect(e.target.value))}>
            <option value="">selected</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>

        </select>
        <button type="submit">submit</button>
      </form>

    </div>
  )
}
export default App