import style from './app.module.css'

function App(){
  return(
    <div className={style.container}>
      <div className={style.todo}>
      <h1>My Todo List</h1>

      <input className={style.type}type="text" placeholder="add a new todo.."/>
      <button>Add</button>
      </div>
      <div className={style.flexe}>
        <div className={style.pragraph}>
        <input type="checkbox" />
        <span>hey whatsapp</span>
        </div>
        <div className={style.delete}>
          <input type='checkbox'  />
          <span className={style.doing}>how are you doing</span> 
          
          <span className={style.del}>Delete</span>
        </div>
        <div  className={style.par}>
          <input type='checkbox'  />
        <span>this is cool right ?</span>
        </div>
      </div>  
    

    </div>
  )
}
export default App;