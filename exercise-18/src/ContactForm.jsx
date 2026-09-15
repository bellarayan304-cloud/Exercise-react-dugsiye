// export const CountantForm =()=>{

//     return(
//         <div>
//             <h1>Countant Management App</h1>
//             <h3>Edit Countant</h3>
//                 <form>
//                     <label htmlFor="name">UserName:</label>
//                     <input type="text" name="name" onChange={((e)=> dispatch({type: 'UserName',payload:e.target.value}))} /><br />
//                     <label htmlFor="email">Email:</label>
//                     <input type="email" name="email"  onChange={((e)=> dispatch({type: 'email',payload:e.target.value}))}  /><br />
//                     <label htmlFor="tel">Phone:</label>
//                     <input type="tel" name="tel"  onChange={((e)=> dispatch({type: 'tel',payload:e.target.value}))}  /><br />
//                     <button type="submit">Add</button>

//                 </form>
//                 <>
//                 <h2>Step 2 Review</h2>

   
//       <p>First Name: {state.fristName}</p> 
   
    
//       <p>Last Name:  {state.lastName}</p>
    

   
//       <p>Email: {state.email}</p> 
    

    
//       <p>Phone:  {state.phone}</p>
   
//     <button
//       type="button"
//       onClick={() => dispatch({ type: "back" })}
//     >
//       Back
//     </button>

//     <button type="button" onClick={()=> dispatch({type:"Submit"})}>
//       Submit
//     </button> 
//   </>

                

//         </div>
        
//     )
// }








import { useState, useEffect } from 'react';

const ContactForm = ({ dispatch, editingContact, setEditingContact }) => {


  const [contact, setContact] = useState(
    editingContact || { id: null, name: '', email: '', phone: '' }
  );

  const [isEditing, setIsEditing] = useState(false);


  useEffect(() => {
    if (editingContact) {
      setContact(editingContact);
      setIsEditing(true);
    }
  }, [editingContact]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContact({ ...contact, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (contact.name && contact.email && contact.phone) {
      if (isEditing) {
        dispatch({ type: 'edit', payload: contact });
        setIsEditing(false);
      } else {
        dispatch({
          type: 'add',
          payload: { ...contact, id: Date.now(), favorite: false },
        });
      }
      setContact({ id: null, name: '', email: '', phone: '' });
    }
  };

  const handleCancelEdit = () => {
    setContact({ id: null, name: '', email: '', phone: '' });
    setIsEditing(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>{isEditing ? 'Edit Contact' : 'Add New Contact'}</h3>
      <div>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={contact.name}
            onChange={handleChange}
            required
          />
        </label>
      </div>
      <div>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={contact.email}
            onChange={handleChange}
            required
          />
        </label>
      </div>
      <div>
        <label>
          Phone:
          <input
            type="tel"
            name="phone"
            value={contact.phone}
            onChange={handleChange}
            required
          />
        </label>
      </div>
      <button type="submit">{isEditing ? 'Update' : 'Add'}</button>
      {isEditing && <button onClick={handleCancelEdit}>Cancel</button>}
    </form>
  );
};

export default ContactForm;