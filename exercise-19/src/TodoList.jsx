
import { useContext } from 'react';
import TodoContext from './TodoContext.js';
import TodoItem from './TodoItem.jsx';


 const TodoList=()=>{
  
  const { state } = useContext(TodoContext);

  return (
    <ul>
      {state.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
}
export default TodoList;