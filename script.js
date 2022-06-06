// TODAS AS VARIÁVEIS DOCUMENT GLOBAIS
let x = document.getElementById("x");
let slider = document.getElementById("slider");
let gerarSenha = document.getElementById("gerarSenha");
let tamanhoDaSenha = document.getElementById("tamanhoDaSenha");
let senha = document.getElementById("senha");
let containerFooter = document.getElementById("containerFooter");
let valor = document.getElementById("valor");
let cliqueCopiar = document.getElementById("cliqueCopiar");
let alerta = document.getElementById("alerta");
let check = document.querySelectorAll(".check");
// ==========================

// TODAS AS VARIÁVEIS GLOBAIS  
let caracteres = "0123456789012345678901234567890123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ(){}[]!@#$%&´`~^*+=/\|_-,.;:";
// ==========================

// TODOS OS EVENTOS
slider.addEventListener("input", atualizarValor);
gerarSenha.addEventListener("click", criarSenha);
cliqueCopiar.addEventListener("click", copiarSenha);
// ================

function atualizarValor(){
    valor.innerHTML = slider.value;
}

function criarSenha(){

let pass= "";
for(let i = 0; i < slider.value; ++i){
    pass += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
}

mostrarSenha(pass)
}

function mostrarSenha(pass){
   containerFooter.style.display = "flex";
   senha.innerHTML = pass;
}

function copiarSenha(){
    alerta.style.display = "none";
    navigator.clipboard.writeText(senha.innerText);
    alerta.style.display = "block";
}


setInterval(alterarCaracteres, 400);
function alterarCaracteres(){

    let caracteresAleatorios = caracteres.charAt(Math.floor(Math.random() * slider.value));
    x.innerText += caracteresAleatorios;
    if(-- x.innerText.length >= slider.value){
        x.innerText = "";
    }
}