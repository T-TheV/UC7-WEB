import React from "react";

function InputField({label, value, onChange}) {
  return (
    
    <>
        <label>{label}</label>
        <input type="number" value={value} onChange={onChange}/>
         </>
  );
}

export default InputField;