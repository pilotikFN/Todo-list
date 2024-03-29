import React from "react";
import Checkbox from "../Checkbox";
import "./TodoItem.css";

const TodoItem = ({ todo, toggleTodo }) => {
   return (
      <div className="todo-item">
         <h3>{todo.message}</h3>
         <Checkbox checked={todo.done} onChange={() => toggleTodo(todo)} />
      </div>
   );
};

export default TodoItem;
