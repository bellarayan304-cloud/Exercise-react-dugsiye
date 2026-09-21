import { useState } from "react"

function App(){
  const [formData, setFormData] =useState({
    username:"",
    email:"",
    password:"",
    country:"",
    agreement:false
  })
  const [isCheck, setIsCheck]=useState(false)
  const [select, setSelect]=useState("")
  const handleSubmit=(e)=>{
    e.preventDefault();
      console.log(formData)

    // if(!isCheck){
    //   alert("please the checked ")
    //   return
    // }
    // if(select == ""){
    //   alert("please choose select optional")
    //   return
    // }
    //  console.log(isCheck)
    //  console.log(select)

  }
  const handleChange=(e)=>{
    const {name,value}=e.target
    // console.log({name})
    // console.log({value})
    setFormData((preData)=>({...preData, [name]:value}))
  
  }
  const handleCheck=(e)=>{
    setIsCheck(e.target.checked)
   
  }

  return(
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="username" placeholder="Enter The Name" value={formData.username} 
        onChange={handleChange} />

        <input type="email" name="email" placeholder="Enter The Email" required value={formData.email} onChange={handleChange} />

        <input type="password" name="password" placeholder="Enter The password" value={formData.password} onChange={handleChange} />

        <label htmlFor="">checkbox</label>
        <input name="agreement" type="checkbox" checked={formData.agreement} onChange={handleChange} />

        <select name="country" value={formData.country} onChange={handleChange}>
            <option value="">selected</option>
            <option value="somalia">somalia</option>
            <option value="kenya">kenya</option>

        </select>
        <button type="submit">submit</button>
      </form>

    </div>
  )
}
export default App