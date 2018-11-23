import React from 'react';
import TodoItem from './TodoItem.jsx'
import './TodoList.css'

const TodoList = ({todos, isDelete}) => {
  return(
    <div className="todo-list">
      {todos.map((item, index) => <TodoItem listIndex = {index} todo = {item.todo} isDelete={isDelete}/>)}
    </div>
  );
} 

export default TodoList;