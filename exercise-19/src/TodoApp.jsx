import { useReducer } from 'react';
import TodoContext from './TodoContext';
import { reducer, initialState } from './Reducer';
import TodoList from './TodoList';
import { TodoForm } from './TodoForm';

const TodoApp = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <TodoContext.Provider value={{ state, dispatch }}>
      <div>
             
        <TodoForm />
        <TodoList />
      </div>
    </TodoContext.Provider>
  );
};

export default TodoApp;