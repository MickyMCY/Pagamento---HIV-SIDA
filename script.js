document.addEventListener("DOMContentLoaded", function(){

const screens = document.querySelectorAll(".screen");
const btnStep1 = document.getElementById("btnStep1");
const mpesaBtn = document.getElementById("mpesaBtn");
const emolaBtn = document.getElementById("emolaBtn");
const copyBtn = document.getElementById("copyBtn");
const confirmBtn = document.getElementById("confirmBtn");
const numeroPagamento = document.getElementById("numeroPagamento");
const ussdInfo = document.getElementById("ussdInfo");
const erroTelefone = document.getElementById("erroTelefone");
const toast = document.getElementById("toast");

let numeroAtual = "";

function goTo(step){
screens.forEach(s => s.classList.remove("active"));
document.getElementById("screen"+step).classList.add("active");
}

btnStep1.addEventListener("click", function(){

const telefone = document.getElementById("telefone").value.replace(/\D/g,'');

if(telefone.length !== 9){
erroTelefone.innerText="Número deve ter 9 dígitos.";
return;
}

goTo(2);
});

mpesaBtn.addEventListener("click", function(){
numeroAtual="844459897";
numeroPagamento.innerText=numeroAtual;
ussdInfo.innerText="Marque *150# no seu telefone para pagar.";
goTo(3);
mostrarBotao();
});

emolaBtn.addEventListener("click", function(){
numeroAtual="867145774";
numeroPagamento.innerText=numeroAtual;
ussdInfo.innerText="Marque *898# no seu telefone para pagar.";
goTo(3);
mostrarBotao();
});

copyBtn.addEventListener("click", function(){
navigator.clipboard.writeText(numeroAtual);
copyBtn.innerText="copiado";
copyBtn.style.transform="scale(.85)";
toast.style.display="block";
setTimeout(()=>{toast.style.display="none";},1500);
});

function mostrarBotao(){
confirmBtn.classList.add("hidden");
setTimeout(()=>{
confirmBtn.classList.remove("hidden");
},15000);
}

confirmBtn.addEventListener("click", function(){
window.location.href="https://wa.me/25884598917";
});

document.querySelectorAll(".back").forEach(el=>{
el.addEventListener("click", function(){
goTo(el.dataset.back);
});
});

});
