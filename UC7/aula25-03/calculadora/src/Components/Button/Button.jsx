import React from "react";
import style from "./Button.module.css";

function Button({text, onClick}) {
  return (
    
    <>
     <button onClick={onclick}>
         {text}
     </button>
    </>
  );
}

export default Button;