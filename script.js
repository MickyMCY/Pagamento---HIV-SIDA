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

function vibrar(){
if(navigator.vibrate) navigator.vibrate(100);
}

function goTo(step){
screens.forEach(s=>s.classList.remove("active"));
document.getElementById("screen"+step).classList.add("active");
}

btnStep1.addEventListener("click",()=>{
const nome = document.getElementById("nome").value.trim();
const telefone = document.getElementById("telefone").value.replace(/\D/g,'');

if(telefone.length !== 9){
erroTelefone.innerText = telefone.length < 9 ? 
"Faltam dígitos no número." : "Número inválido.";
vibrar();
return;
}

if(!["84","85","86","87"].includes(telefone.substring(0,2))){
erroTelefone.innerText="Prefixo inválido.";
vibrar();
return;
}

erroTelefone.innerText="";
goTo(2);
});

mpesaBtn.addEventListener("click",()=>{
numeroAtual="844459897";
numeroPagamento.innerText=numeroAtual;
ussdInfo.innerText="Marque *150# no seu telefone e efectue o pagamento.";
goTo(3);
mostrarBotaoConfirmar();
});

emolaBtn.addEventListener("click",()=>{
numeroAtual="867145774";
numeroPagamento.innerText=numeroAtual;
ussdInfo.innerText="Marque *898# no seu telefone e efectue o pagamento.";
goTo(3);
mostrarBotaoConfirmar();
});

copyBtn.addEventListener("click",()=>{
navigator.clipboard.writeText(numeroAtual);
copyBtn.innerText="copiado";
copyBtn.style.transform="scale(.85)";
toast.style.display="block";
setTimeout(()=>{
toast.style.display="none";
},1500);
});

function mostrarBotaoConfirmar(){
confirmBtn.classList.add("hidden");
setTimeout(()=>{
confirmBtn.classList.remove("hidden");
},15000);
}

confirmBtn.addEventListener("click",()=>{
window.location.href="https://wa.me/25884598917";
});

document.querySelectorAll(".back").forEach(el=>{
el.addEventListener("click",()=>{
goTo(el.dataset.back);
});
});
