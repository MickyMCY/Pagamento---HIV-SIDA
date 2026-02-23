let selectedMethod = "";
const whatsappNumber = "25884598917";

const step1 = document.getElementById("step1");
const step2 = document.getElementById("step2");
const step3 = document.getElementById("step3");

const nameInput = document.getElementById("name");
const phoneInput = document.getElementById("phone");

document.getElementById("goStep2").onclick = function(){

let valid = true;

if(nameInput.value.trim() === ""){
document.getElementById("nameError").innerText = "Nome obrigatório";
valid = false;
}else{
document.getElementById("nameError").innerText = "";
}

if(phoneInput.value.length !== 9){
document.getElementById("phoneError").innerText = "Número deve ter 9 dígitos";
valid = false;
}else{
document.getElementById("phoneError").innerText = "";
}

if(!valid) return;

step1.classList.remove("active");
step2.classList.add("active");
}

document.getElementById("mpesaBtn").onclick = function(){
selectedMethod = "M-Pesa";
openPayment();
}

document.getElementById("emolaBtn").onclick = function(){
selectedMethod = "e-Mola";
openPayment();
}

function openPayment(){
step2.classList.remove("active");
step3.classList.add("active");

let info = "";
let manual = "";

if(selectedMethod === "M-Pesa"){
info = "844598917 - CELESTE NHACHOTA";
manual = "Digite *150# no seu telefone e efetue o pagamento manualmente.";
}else{
info = "844598917 - CELESTE NHACHOTA";
manual = "Digite *898# no seu telefone e efetue o pagamento manualmente.";
}

document.getElementById("paymentInfo").innerText = info;
document.getElementById("manualInfo").innerText = manual;

startWaiting();
}

document.getElementById("copyBtn").onclick = function(){

const text = document.getElementById("paymentInfo").innerText.split(" - ")[0];
navigator.clipboard.writeText(text);

this.innerText = "Copiado ✓";
this.style.background = "#16a34a";
}

function startWaiting(){

const confirmBtn = document.getElementById("confirmBtn");

setTimeout(()=>{
confirmBtn.style.display = "block";
},15000);

confirmBtn.onclick = function(){

let message = `Olá, já efetuei o pagamento de 244 MZN. Quero receber a receita.`;
let url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
window.location.href = url;
}
}

function goBack(step){
step1.classList.remove("active");
step2.classList.remove("active");
step3.classList.remove("active");

if(step === 1) step1.classList.add("active");
if(step === 2) step2.classList.add("active");
}
