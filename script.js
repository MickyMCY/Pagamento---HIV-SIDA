let currentStep = 1;
let vagas = 18;

const nome = document.getElementById("nome");
const telefone = document.getElementById("telefone");

function irPara(step){
document.querySelector(".step.active").classList.remove("active");
document.getElementById("step"+step).classList.add("active");
currentStep = step;
}

function voltar(step){
irPara(step);
}

document.getElementById("btnStep1").addEventListener("click",()=>{
let valido = true;

if(nome.value.trim()===""){
document.getElementById("nomeErro").innerText="Informe o nome";
valido=false;
}else{
document.getElementById("nomeErro").innerText="";
}

if(!/^[0-9]{9}$/.test(telefone.value)){
document.getElementById("telErro").innerText="Número deve ter 9 dígitos";
valido=false;
navigator.vibrate(200);
}else{
document.getElementById("telErro").innerText="";
}

if(valido){
irPara(2);
}
});

let totalTime=600;
let timerEl=document.getElementById("timer");
let progressEl=document.getElementById("progress");

let countdown=setInterval(()=>{
let min=Math.floor(totalTime/60);
let sec=totalTime%60;
timerEl.innerText=`${min}:${sec<10?"0":""}${sec}`;
progressEl.style.width=((600-totalTime)/600)*100+"%";
totalTime--;
if(totalTime<0)clearInterval(countdown);
},1000);

document.querySelectorAll(".payment-btn").forEach(btn=>{
btn.addEventListener("click",()=>{
let type=btn.dataset.type;
let info=document.getElementById("paymentInfo");

if(type==="mpesa"){
info.innerHTML="<p>844598917 - CELESTE NHACHOTA</p><p>Digite *150# para pagar</p>";
}else{
info.innerHTML="<p>867145774 - CELESTE NHACHOTA</p><p>Digite *898# para pagar</p>";
}

irPara(3);
});
});

document.getElementById("copiarBtn").addEventListener("click",()=>{
let texto=document.getElementById("paymentInfo").innerText;
navigator.clipboard.writeText(texto);
mostrarToast("Copiado com sucesso");
document.getElementById("processingInfo").classList.remove("hidden");

setTimeout(()=>{
document.getElementById("confirmBtn").classList.remove("hidden");
},15000);
});

document.getElementById("confirmBtn").addEventListener("click",()=>{
let verify=document.getElementById("verifyProgress");
let width=0;
let interval=setInterval(()=>{
width+=5;
verify.style.width=width+"%";
if(width>=100){
clearInterval(interval);
window.location.href="https://wa.me/25884598917";
}
},150);
});

function mostrarToast(msg){
let toast=document.getElementById("toast");
toast.innerText=msg;
toast.style.display="block";
setTimeout(()=>{toast.style.display="none"},2000);
}

setInterval(()=>{
if(vagas>6){
vagas--;
document.getElementById("vagas").innerText=vagas;
}
},15000);
