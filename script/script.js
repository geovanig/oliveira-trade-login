let nome = document.querySelector("#nome");
let labelNome = document.querySelector("#labelNome");
let validNome

let email = document.querySelector("#email");
let labelEmail = document.querySelector("#labelEmail");
let validEmail = false;

let senha = document.querySelector("#senha");
let labelSenha = document.querySelector("#labelSenha");
let validSenha = false;

let confirmarSenha = document.querySelector("#confirmarSenha");
let labelConfirmarSenha = document.querySelector("#labelConfirmarSenha");
let validConfirmarSenha = false;

nome.addEventListener("keyup", () =>{
    if(nome.value.length >= 1) {
        validNome = true;
    }else {
        validNome = false;
    }
});

email.addEventListener("keyup", () =>{
    if(email.value.length >= 1) {
        validEmail = true;
    }else {
        validNome = false;
    }
});

senha.addEventListener("keyup", () =>{
    if(senha.value.length >= 1) {
        validSenha = true;
    }else {
        validNome = false;
    }
});

confirmarSenha.addEventListener("keyup", () => {
    if (senha.value != confirmarSenha.value) {
        labelConfirmarSenha.setAttribute("style", "color: red")
        labelConfirmarSenha.innerHTML = "Senhas divergentes"
        validConfirmarSenha = false;
    } else {
        labelConfirmarSenha.setAttribute("style", "color: green")
        labelConfirmarSenha.innerHTML = "Confirmar Senha"
        validConfirmarSenha = true;
    }
});

function cadastrar(){
    if(validNome && validEmail && validSenha && validConfirmarSenha) {

        let userList = JSON.parse(localStorage.getItem("userList") || "[]")
        userList.push(
            {
                nomeCad: nome.value,
                emailCad: email.value,
                senhaCad: senha.value
            }
        )
        localStorage.setItem("userList", JSON.stringify(userList))
        alert("Usuário cadastrado, Faça login.");
        window.location.href = "index.html"
    }else {
        alert("Por favor, preencha todos os campos.");
    }
}

function entrar(){

    let email = document.querySelector("#email");
    let emailLabel = document.querySelector("#emailLabel");
    let senha = document.querySelector("#senha");
    let senhaLabel = document.querySelector("#senhaLabel");
    let userList = [];

    let userValid = {
        nome: "",
        email: "",
        senha: ""
    }

    userList = JSON.parse(localStorage.getItem("userList"));

    userList.forEach((item) => {
        if (email.value == item.emailCad && senha.value == item.senhaCad) {
            userValid = {
                nome: item.nomeCad,
                email: item.emailCad,
                senha: item.senhaCad
            }
        }
    });

    if (
        email.value == userValid.email
        && senha.value == userValid.senha
        && email.value != ""
        && senha.value != ""
        ) {
        alert("Seja bem vindo!!!")
        window.location.href = "inicio.html"
    } else {
        alert("Usuario não existe, verifique as informações ou cadastre-se.")
    }

}