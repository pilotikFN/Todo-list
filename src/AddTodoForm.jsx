import React, { useState } from "react";

const AddTodoForm = ({ addTodo, placeholder }) => {
   const [message, setMessage] = useState("");

   const handleSubmit = (e) => {
      e.preventDefault();
      if (message.trim() === "") {
         return;
      }
      addTodo({
         message: message,
         done: false,
      });
      setMessage("");
   };

   return (
      <form onSubmit={handleSubmit}>
         <input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            type="text"
            placeholder={placeholder}
            name="message"
         />
         <button className="add-btn">+</button>
      </form>
   );
};

export default AddTodoForm;