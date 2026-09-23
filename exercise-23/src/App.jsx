import { useState } from "react"
import './App.css'

function App() {
  const [formDate, setFormDate] = useState({
    username: "",
    email: "",
    role: "",
    expriance:"",
    checkbox: false

  })
  const [error, setError] = useState({})
  const [sucsuss, setSucsuss] = useState()
  const [isCheked, setIsCheked] = useState()
  const [select, setSelect] = useState()

  const handleSubmit = (event) => {
    event.preventDefault()

    const validationError = validateForm();
    console.log(Object.keys(validationError))
    if (Object.keys(validationError).length === 0) {
      console.log("sucsess")
    }
    setError(validationError)
    setFormDate({
      username: "",
      email: "",
      role: "",
      expriance:"",
      checkbox: false

    })

//       const newErrors = {};

//   const experience = Number(formDate.expriance);

//   if (!experience || experience < 5 || experience > 50) {
//     newErrors.experience =
//       "Please enter valid years of experience (5–50).";
//   }

//   setError(newErrors);

//   if (Object.keys(newErrors).length === 0) {
//     console.log(formDate);
//   }

};

  
  const validateForm = () => {
    const errors = {}
    if (!formDate.email.trim()) {
      errors.email = "email is requared"
    }
    if (!formDate.role.trim()) {
      errors.role = "role is requared"
    }
    if (!formDate.username.trim()) {
      errors.username = "username is requared"
    }
    if (!formDate.checkbox) {
      errors.checkbox = "please selected at one skills"
    }
    if (!formDate.expriance) {
      errors.expriance = "please enter valid years of expriance"
    }
    return errors


  }
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormDate((prev) => ({ ...prev, [name]: value }))
    if (name === 'Email' && !value.includes('@')) {
      setError((prev) => ({ ...prev, Email: "emalilku waaqlad" }))
    } else {
      setError((prev) => ({ ...prev, [name]: "" }))
    }



  }


  return (
    <div className="countinous">
      <form onSubmit={handleSubmit}>
        <div className="center">
          <div className="menu">
            <label htmlFor="">Full Name:</label><br />
            <input type="text" name="username" placeholder="Enter Name" value={formDate.username} onChange={handleChange} 
              className={error.username ? "input-error" : ""}
            /><br />
            {error.username && <p className="error">{error.username}</p>
            }
            <label htmlFor="">Email:</label><br />
            <input type="email" name="email" placeholder="Enter Email" value={formDate.email} onChange={handleChange} /><br />
            {error.email && <p className="error">{error.email}</p>
            }
          </div>
          <label htmlFor="">Role:</label><br />
          <select name="role" value={formDate.role} onChange={handleChange}>
            <option value="">selected</option>
            <option value="front end">Front End</option>
            <option value="back end">Back End</option>
            <option value="graphic designer">Graphic Designer</option>
          </select><br />
          {error.role && <p className="error">{error.role}</p>
          }
          <div className="title"> 
            <label htmlFor="">Years of expriance:</label>

             <input type="number"  name="expriance"  value={formDate.expriance} onChange={handleChange}/><br />
               {error.expriance && <p className="error">{error.expriance}</p>
            }
          </div>
         


          <div className="layla">
            <label htmlFor="" id="">
              <p>Skills</p>
              <input type="checkbox" name="checkbox" value={formDate.checkbox} onChange={handleChange} />
              JavaScript
            </label>


            <label>
              <input type="checkbox" />
              React
            </label>
            <br />

            <label>
              <input type="checkbox" />
              TypeScript
            </label>


            <label>
              <input type="checkbox" />
              Python
            </label>
            <br />
            {error.checkbox && <p className="error">{error.checkbox}</p>
            }
          </div>
        </div>

        <button type="submit">submit</button>
      </form>
    </div>
  )
}
export default App