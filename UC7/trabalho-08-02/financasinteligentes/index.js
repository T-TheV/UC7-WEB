// Aguarde o carregamento do DOM
document.addEventListener("DOMContentLoaded", () => {
    const registroBtn = document.getElementById("registro");
    const loginBtn = document.getElementById("login");

    // Adicionar eventos de clique
    registroBtn.addEventListener("click", (event) => {
        event.preventDefault(); // Evita o comportamento padrão do link
        window.location.href = "registro.html"; // Redireciona para o formulário de registro
    });

    loginBtn.addEventListener("click", (event) => {
        event.preventDefault(); // Evita o comportamento padrão do link
        window.location.href = "login.html"; // Redireciona para o formulário de login
    });
});
