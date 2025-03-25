import React from "react";
import style from "./ResultDisplay.module.css";

function ResultDisplay({gorjeta, total}) {
  return (
    
    <>
     <div className={style.resultDisplay}>
        <p>Gorjeta: R$ {gorjeta}</p>
        <p>Total: {total}</p>
     </div>
    </>
  );
}

export default ResultDisplay;