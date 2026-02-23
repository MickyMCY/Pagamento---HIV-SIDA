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
let temporizadorAtivo = false;

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
numeroAtual="844598917";
numeroPagamento.innerText="844598917 - CELESTE NHACHOTA";
ussdInfo.innerText="Marque *150# no seu telefone, efectue o pagamento e volte aqui.";
goTo(3);
iniciarProcessoManual();
});

emolaBtn.addEventListener("click", function(){
numeroAtual="867145774";
numeroPagamento.innerText="867145774 - CELESTE NHACHOTA";
ussdInfo.innerText="Marque *898# no seu telefone, efectue o pagamento e volte aqui.";
goTo(3);
iniciarProcessoManual();
});

copyBtn.addEventListener("click", function(){

navigator.clipboard.writeText(numeroAtual);

copyBtn.innerText="copiado";
copyBtn.style.transform="scale(.85)";
copyBtn.disabled=true;

toast.style.display="block";
setTimeout(()=>{toast.style.display="none";},1500);

});

function iniciarProcessoManual(){

if(temporizadorAtivo) return;
temporizadorAtivo = true;

confirmBtn.classList.add("hidden");

let processamento = document.createElement("div");
processamento.id="processamentoManual";
processamento.innerHTML=`
<div style="text-align:center;margin-top:15px;">
<div class="loader"></div>
<p style="color:#94a3b8;font-size:13px;margin-top:10px;">
Aguardando pagamento manual...
<br>Após pagar, volte aqui.
</p>
</div>
`;

numeroPagamento.parentNode.appendChild(processamento);

setTimeout(()=>{
document.getElementById("processamentoManual").remove();
confirmBtn.classList.remove("hidden");
confirmBtn.style.animation="fadeIn .4s ease";
},15000);

}

confirmBtn.addEventListener("click", function(){
window.location.href="https://wa.me/25884598917";
});

document.querySelectorAll(".back").forEach(el=>{
el.addEventListener("click", function(){
temporizadorAtivo=false;
goTo(el.dataset.back);
});
});

});
