document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Previne o comportamento padrão de envio do formulário
    
    // Obtendo os valores dos campos de entrada
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    
    // Verificar se os campos estão preenchidos
    if (name && email && password) {
        
        alert("Login efetuado com sucesso")
    } else {
        alert("Por favor, preencha todos os campos.");
    }
});