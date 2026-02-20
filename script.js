const screens = document.querySelectorAll(".screen");
const btnStep1 = document.getElementById("btnStep1");
const mpesaBtn = document.getElementById("mpesaBtn");
const emolaBtn = document.getElementById("emolaBtn");
const copyBtn = document.getElementById("copyBtn");
const confirmBtn = document.getElementById("confirmBtn");
const metodoTitulo = document.getElementById("metodoTitulo");
const numeroPagamento = document.getElementById("numeroPagamento");
const toast = document.getElementById("toast");

let numeroAtual = "";

function goTo(step){
screens.forEach(s => s.classList.remove("active"));
document.getElementById("screen"+step).classList.add("active");
}

btnStep1.addEventListener("click",()=>{
const nome = document.getElementById("nome").value;
const tel = document.getElementById("telefone").value;

if(!nome || !tel){
alert("Preencha todos os campos.");
return;
}

goTo(2);
});

mpesaBtn.addEventListener("click",()=>{
numeroAtual = "844459897";
metodoTitulo.innerText = "Pagamento via MPesa";
numeroPagamento.innerText = numeroAtual;
goTo(3);
});

emolaBtn.addEventListener("click",()=>{
numeroAtual = "867145774";
metodoTitulo.innerText = "Pagamento via e-Mola";
numeroPagamento.innerText = numeroAtual;
goTo(3);
});

copyBtn.addEventListener("click",()=>{
navigator.clipboard.writeText(numeroAtual);
toast.style.display="block";
setTimeout(()=>toast.style.display="none",2000);
});

confirmBtn.addEventListener("click",()=>{
window.location.href="https://wa.me/25884598917";
});

document.querySelectorAll(".back").forEach(el=>{
el.addEventListener("click",()=>{
goTo(el.dataset.back);
});
});
