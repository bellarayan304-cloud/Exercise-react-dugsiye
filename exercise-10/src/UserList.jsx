import { useState } from "react";

const UserList =()=>{
    const [lists, setLists] =useState([
        {id:1,name:"layla", email:"layla@gmail.com"},
        {id:2,name:"layla", email:"layla@gmail.com"}
    ])

    return(
        <div>
        <ul>
        {
            lists.map((list, index)=>(
                <li key={list.id}>{list.name}(  
                {list.email})
                </li>
                
            ))
        }
        </ul>
        </div>

    )
}
export default UserList;