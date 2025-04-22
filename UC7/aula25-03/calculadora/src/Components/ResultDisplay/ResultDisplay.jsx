import React from "react";

function ResultDisplay({gorjeta, total}) {
  return (
    
    <>
        <p>Gorjeta: R$ {gorjeta}</p>
        <p>Total: {total}</p>
    </>
  );
}

export default ResultDisplay;