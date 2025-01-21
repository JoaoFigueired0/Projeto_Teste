const butonLogin = document.getElementById("btt_login")
const inputEmail = document.getElementById("input_email")
const inputSenha = document.getElementById("input_senha")

const especiais = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com|org|net|gov|edu|io|co|br)$/;


butonLogin.addEventListener("click", () => {
    if (inputEmail.value === "" || inputSenha.value === "") {
        alert("Algum campo está vazio");
    } else if( inputEmail.value !== localStorage.setItem("email", inputEmail) || inputSenha.value !== localStorage.setItem("senha", inputSenha) || !especiais.test(inputEmail.value)){
        alert("Senha ou E-mail está errado")
    } else {
        window.location.href = "../html/pagInterna.html";
    }
})