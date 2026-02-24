// ===== TEU CÓDIGO ORIGINAL =====
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

document.getElementById("btnStep1").addEventListener("click", function(){
let valido = true;

if(nome.value.trim() === ""){
document.getElementById("nomeErro").innerText = "Informe o nome";
valido = false;
} else {
document.getElementById("nomeErro").innerText = "";
}

if(!/^[0-9]{9}$/.test(telefone.value)){
document.getElementById("telErro").innerText = "Número deve ter 9 dígitos";
valido = false;
if(navigator.vibrate) navigator.vibrate(200);
} else {
document.getElementById("telErro").innerText = "";
}

if(valido){
irPara(2);
}
});

let totalTime = 600;
let timerEl = document.getElementById("timer");
let progressEl = document.getElementById("progress");

let countdown = setInterval(function(){
let min = Math.floor(totalTime/60);
let sec = totalTime%60;
timerEl.innerText = min + ":" + (sec < 10 ? "0" : "") + sec;
progressEl.style.width = ((600 - totalTime)/600) * 100 + "%";
totalTime--;
if(totalTime < 0) clearInterval(countdown);
}, 1000);

document.querySelectorAll(".payment-btn").forEach(function(btn){
btn.addEventListener("click", function(){
let type = btn.dataset.type;
let info = document.getElementById("paymentInfo");

if(type === "mpesa"){
info.innerHTML = "<p>844598917 - CELESTE NHACHOTA</p><p>Digite *150# para pagar</p>";
} else {
info.innerHTML = "<p>867145774 - CELESTE NHACHOTA</p><p>Digite *898# para pagar</p>";
}

irPara(3);
});
});

// ===== BOTÃO COPIAR CORRIGIDO - COPIA SÓ O NÚMERO =====
document.getElementById("copiarBtn").addEventListener("click", function(){
    let info = document.getElementById("paymentInfo");
    
    // Extrai apenas o número (9 dígitos)
    let textoCompleto = info.innerText;
    let numero = textoCompleto.match(/\d{9}/g);
    
    if(numero && numero.length > 0) {
        navigator.clipboard.writeText(numero[0]);
        mostrarToast("Número copiado: " + numero[0]);
    } else {
        // Fallback
        let apenasDigitos = textoCompleto.replace(/\D/g, '');
        if(apenasDigitos.length >= 8) {
            let numeroLimpo = apenasDigitos.substring(0, 9);
            navigator.clipboard.writeText(numeroLimpo);
            mostrarToast("Número copiado");
        }
    }
    
    document.getElementById("processingInfo").classList.remove("hidden");
    
    setTimeout(function(){
        document.getElementById("confirmBtn").classList.remove("hidden");
    }, 15000);
});

// ===== BOTÃO CONFIRMAR COM MENSAGEM WHATSAPP =====
document.getElementById("confirmBtn").addEventListener("click", function(){
let verify = document.getElementById("verifyProgress");
let width = 0;
let interval = setInterval(function(){
width += 5;
verify.style.width = width + "%";
if(width >= 100){
clearInterval(interval);
// Mensagem personalizada para o WhatsApp
let numeroWhatsApp = "258844598917";
let mensagem = "Olá, já efectuei o pagamento. Como faço para receber a Receita da Cura do HIV/SIDA?";
let mensagemCodificada = encodeURIComponent(mensagem);
window.location.href = "https://wa.me/" + numeroWhatsApp + "?text=" + mensagemCodificada;
}
}, 150);
});

function mostrarToast(msg){
let toast = document.getElementById("toast");
toast.innerText = msg;
toast.style.display = "block";
setTimeout(function(){ 
toast.style.display = "none";
}, 2000);
}

// ===== SISTEMA DE VAGAS RÁPIDO =====
setInterval(function(){
if(vagas > 3) {
if(vagas > 15) {
vagas -= 3;
} else if(vagas > 10) {
vagas -= 2;
} else if(vagas > 5) {
vagas -= 1;
} else {
vagas -= 1;
}
if(vagas < 3) vagas = 3;
document.getElementById("vagas").innerText = vagas;

let vagasElement = document.getElementById("vagas");
if(vagas <= 5) {
vagasElement.style.color = "#ef4444";
vagasElement.style.animation = "pulseVagas 1s infinite";
} else if(vagas <= 8) {
vagasElement.style.color = "#f97316";
} else {
vagasElement.style.color = "#facc15";
}
}
}, 4000);

// ===== NOTIFICAÇÕES DE COMPRA =====
setInterval(function(){
if(vagas > 3) {
let nomesCompradores = [
"Amélia", "Bernardo", "Cecília", "Dércio", "Ernesto", 
"Francisca", "Gildo", "Helena", "Inácio", "Júlia",
"Lucas", "Marta", "Nelson", "Olívia", "Paulo"
];
let nome = nomesCompradores[Math.floor(Math.random() * nomesCompradores.length)];
mostrarNotificacaoCompra(nome + " comprou agora 🔥");

if(navigator.vibrate) {
navigator.vibrate(50);
}
}
}, 8000);

function mostrarNotificacaoCompra(mensagem) {
let notifDiv = document.getElementById("notifications");
let notif = document.createElement("div");
notif.className = "notification";
notif.innerText = mensagem;
notifDiv.appendChild(notif);

setTimeout(function(){
notif.remove();
}, 4000);
}

// ===== TESTEMUNHO TOAST - CANTO INFERIOR ESQUERDO =====
document.addEventListener('DOMContentLoaded', function(){
    
    let toastEl = document.getElementById('testemunhoToast');
    let nomeEl = document.getElementById('toastNome');
    let textoEl = document.getElementById('toastTexto');
    let tempoEl = document.getElementById('toastTempo');
    
    if(!toastEl || !nomeEl || !textoEl || !tempoEl) return;
    
    // Lista de 60 nomes moçambicanos
    let nomesMocambicanos = [
        "Joana Alice", "Martinha Simbine", "Otall Smih", "Celeste Nhachota",
        "Arminda Tembe", "Cremildo Langa", "Esperança Bié", "Felismina Chaúque",
        "Gertrudes Macamo", "Horácio Nhampossa", "Inácia Matsinhe", "Jeremias Cossa",
        "Lucrécia Uamusse", "Marcelino Nhantumbo", "Nelson Macuácua", "Olinda Guambe",
        "Paulina Sitoe", "Rafael Mondlane", "Sónia Mabjaia", "Tomás Zandamela",
        "Virgínia Machava", "Wilson Nhaca", "Xavier Muianga", "Yolanda Matsolo",
        "Zacarias Tembe", "Amélia Nkosi", "Bernardo Mafumo", "Cecília Chilundo",
        "Delfina Mabote", "Ermelinda Mutola", "Filomena Chissano", "Graça Machel",
        "Hortência Cossa", "Iolanda Matsinhe", "Jacinta Nkosi", "Leonel Muchanga",
        "Mateus Zimba", "Noémia Langa", "Orlando Mabunda", "Paula Nhampossa",
        "Quintino Uetela", "Rosita Macuácua", "Salvador Nkosi", "Tânia Tembe",
        "Úrsula Machava", "Valdemiro Guambe", "Wálter Cossa", "Xavier Sitoe",
        "Yara Matsinhe", "Zito Nhaca", "Alda Matsinhe", "Benjamim Cossa",
        "Carlota Tembe", "David Mabunda", "Eduarda Langa", "Fernando Nhaca",
        "Glória Macuácua", "Hélio Cossa", "Ilda Matsinhe", "Jorge Tembe",
        "Kátia Nhampossa", "Lourenço Uamusse", "Mónica Cossa", "Norberto Langa"
    ];
    
    // Mensagens com TV Miramar
    let mensagens = [
        "Obrigado TV Miramar! 🙏",
        "Funcionou comigo!",
        "TV Miramar mostrou a cura",
        "Negativo no médico",
        "Graças a Deus",
        "Estou curado! 🔥",
        "Receita funcionou",
        "Cura confirmada",
        "Testei negativo 🙌",
        "Milagre aconteceu",
        "Já estou curado",
        "Funciona 100%",
        "Vi na TV Miramar",
        "Negativo após 30 dias",
        "Receita poderosa",
        "Recomendo a todos",
        "Cura do HIV funciona",
        "Testei ontem: negativo",
        "TV Miramar salvou-me",
        "Obrigado pela receita",
        "Funcionou mesmo!",
        "Estou livre do HIV",
        "Receita aprovada",
        "Valeu a pena",
        "Deu certo comigo"
    ];
    
    let nomesUsados = [];
    
    function getNomeNaoUsado() {
        let nomesDisponiveis = nomesMocambicanos.filter(function(nome){
            return !nomesUsados.includes(nome);
        });
        
        if(nomesDisponiveis.length < 5) {
            nomesUsados = [];
            nomesDisponiveis = nomesMocambicanos;
        }
        
        let nomeEscolhido = nomesDisponiveis[Math.floor(Math.random() * nomesDisponiveis.length)];
        nomesUsados.push(nomeEscolhido);
        return nomeEscolhido;
    }
    
    function getTempoRelativo() {
        let tempos = ["agora", "há 1 min", "há 2 min", "há 5 min", "há 10 min"];
        return tempos[Math.floor(Math.random() * tempos.length)];
    }
    
    function mostrarTestemunho() {
        let nome = getNomeNaoUsado();
        let msg = mensagens[Math.floor(Math.random() * mensagens.length)];
        let tempo = getTempoRelativo();
        
        nomeEl.innerText = nome;
        textoEl.innerText = msg;
        tempoEl.innerText = tempo;
        
        // Mostra com animação
        toastEl.classList.add('visivel');
        
        // Esconde após 4 segundos
        setTimeout(function(){
            toastEl.classList.remove('visivel');
        }, 4000);
    }
    
    // Primeiro testemunho após 3 segundos
    setTimeout(function(){
        mostrarTestemunho();
        
        // Depois a cada 12 segundos (4s visível + 8s invisível)
        setInterval(function(){
            mostrarTestemunho();
        }, 12000);
        
    }, 3000);
    
});
