import React from "react";
import "./checkbox.css";

const Checkbox = ({ checked, onChange }) => {
   return (
      <div
         className={
            `checkbox ${checked ? "checkbox-active" : "checkbox-notactive"}`
         }
         onClick={onChange}
      ></div>
   );
};

export default Checkbox;