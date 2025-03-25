import React from "react";
import { useState, useEffect } from "react";
import style from "./ButtonTemaMode.module.css";





function ButtonTemaMode(){
   // const [dark, setDarkMode] = useState(false);

    // Estado inicial do tema é definido com base no valor armazenado no localStorage
    const [dark, setDarkMode] = useState(() => {
        return localStorage.getItem("darkmode") === "true"; // Retorna true se o valor armazenado for "true" (transforma em bool)
    });

    // useEffect é usado para atualizar o localStorage sempre que o estado "dark" mudar
    useEffect(() => {
        localStorage.setItem("darkmode", dark); // Armazena o estado atual do tema no localStorage
    }, [dark]); // Executa o efeito sempre que "dark" for alterado
    return(

        <div className={dark ? style.dark : style.light}>
        <h1>{dark ? "Modo Escuro 🌙" : "Modo Claro ☀️"}</h1>
        <button onClick={() => setDarkMode(!dark)}>
            {dark ? "Alterar Tema 🌙" : " Alterar Tema ☀️"}
        </button>
        </div>
    
    )
}
export default ButtonTemaMode;
