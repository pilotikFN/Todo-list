import { useState } from "react";
import AddTodoForm from "./AddTodoForm";
import TodoItem from "./TodoItem";
import Checkbox from "./UI/Checkbox";

function Todos() {
   const [todos, setTodos] = useState([]);

   const addTodo = (newTodo) => {
      setTodos([...todos, newTodo]);
   };

   const toggleTodo = (clickedTodo) => {
      setTodos((prevTodos) =>
         prevTodos.map((todo) =>
            todo === clickedTodo ? { ...todo, done: !todo.done } : todo
         )
      );
   };

   const placeholder = !todos.length
      ? "Write your first todo"
      : "Write another todo";

   return (
      <div className="todos-container">
         <AddTodoForm addTodo={addTodo} placeholder={placeholder} />
         {todos.map((todo, index) => (
            <TodoItem key={index} todo={todo} toggleTodo={toggleTodo} />
         ))}
      </div>
   );
}

export default Todos;
