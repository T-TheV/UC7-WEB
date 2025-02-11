let titulo = document.getElementById("titulo");
console.log(typeof titulo);
console.log(titulo.innerText);

// Aguarda o carregamento do DOM
document.addEventListener("DOMContentLoaded", () => {
    const registroBtn = document.getElementById("botao");

    // Adicionar eventos de clique
    registroBtn.addEventListener("click", (event) => {




        
        event.preventDefault(); // Evita o comportamento padrão do link
        const nome = document.getElementById("nome");
        const nomeValue = document.getElementById("nome").value;


        if (nomeValue.length < 5) {
            alert(`O nome: ${nomeValue}, tem menos de 5 caracteres!`);
            nome.className = 'erro';
        }
        else{
            nome.className = 'sucesso';
        }
    });
});
