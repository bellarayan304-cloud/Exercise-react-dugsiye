const UserCard = (props) =>{
    console.log(props)
    return( 
        <>
        <h1>Hello  {props.Admin} </h1>
        <span>role is : {props.Role}</span>
        <h2> student is : {props.Student}</h2>
        </> 
    )
} 
export default UserCard;
