const butonCadastrar = document.getElementById("btt_sign_in")
const inputNome = document.getElementById("input_criar_nome")
const inputSenha = document.getElementById("input_criar_senha")
const inputEmail = document.getElementById("input_email")
const inputTelefone = document.getElementById("input_telefone")

const especiais = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com|org|net|gov|edu|io|co|br)$/;
const phoneNum = /^\(\d{2}\)\s\d{4,5}-\d{4}$/

butonCadastrar.addEventListener("click", () => {

    if (inputNome.value === "" || inputSenha.value === "" || inputEmail.value === "" || !especiais.test(inputEmail.value) || inputTelefone.value === "") {
        alert("Tem um campo que não foi preenchido");
    } else if (!phoneNum.test(inputTelefone.value)) {
        alert("O campo de telefone está errado");
    } else {
        localStorage.setItem("nome", inputNome)
        nome = nome + inputNome.value;

        localStorage.setItem("senha", inputSenha)
        senha = senha + inputSenha.value;

        localStorage.setItem("email", inputEmail)
        email = email + inputEmail.value;

        localStorage.setItem("telefone", inputTelefone)
        telefone = telefone + inputTelefone.value;

        
        window.location.href = "../html/login.html";
    }
})