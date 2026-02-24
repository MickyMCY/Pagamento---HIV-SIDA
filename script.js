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

document.getElementById("copiarBtn").addEventListener("click", function(){
let texto = document.getElementById("paymentInfo").innerText;
navigator.clipboard.writeText(texto);
mostrarToast("Copiado com sucesso");
document.getElementById("processingInfo").classList.remove("hidden");

setTimeout(function(){
document.getElementById("confirmBtn").classList.remove("hidden");
}, 15000);
});

document.getElementById("confirmBtn").addEventListener("click", function(){
let verify = document.getElementById("verifyProgress");
let width = 0;
let interval = setInterval(function(){
width += 5;
verify.style.width = width + "%";
if(width >= 100){
clearInterval(interval);
window.location.href = "https://wa.me/25884598917";
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

// ===== SISTEMA DE VAGAS MAIS RÁPIDO =====
setInterval(function(){
if(vagas > 3) {
if(vagas > 15) {
vagas -= 3; // Mais rápido no início
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
}, 4000); // Agora a cada 4 segundos

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
}, 8000); // A cada 8 segundos

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

// ===== COMPONENTE DE TESTEMUNHOS - 1 COMENTÁRIO COM ROTAÇÃO =====
document.addEventListener('DOMContentLoaded', function(){
    
    let container = document.getElementById('testemunhosContainer');
    let nomeEl = document.getElementById('testemunhoNome');
    let textoEl = document.getElementById('testemunhoTexto');
    let tempoEl = document.getElementById('testemunhoTempo');
    let fecharBtn = document.getElementById('fecharTestemunhos');
    
    if(!container || !nomeEl || !textoEl || !tempoEl || !fecharBtn) return;
    
    // Começa fechado? Não. Começa visível mas só aparece após 5 segundos
    container.style.opacity = '0';
    container.style.transition = 'opacity 0.5s ease';
    
    setTimeout(function(){
        container.style.opacity = '1';
    }, 5000); // Aparece após 5 segundos
    
    // Lista de nomes moçambicanos
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
        "Carlota Tembe", "David Mabunda", "Eduarda Langa", "Fernando Nhaca"
    ];
    
    // Mensagens curtas
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
        "Obrigado pela receita"
    ];
    
    let nomesUsados = [];
    let intervalo;
    let timeoutInicial;
    
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
        let tempos = ["agora", "há 1 min", "há 2 min", "há 5 min"];
        return tempos[Math.floor(Math.random() * tempos.length)];
    }
    
    function atualizarTestemunho() {
        let nome = getNomeNaoUsado();
        let msg = mensagens[Math.floor(Math.random() * mensagens.length)];
        let tempo = getTempoRelativo();
        
        // Animação de fade out/in
        nomeEl.style.opacity = '0';
        textoEl.style.opacity = '0';
        tempoEl.style.opacity = '0';
        
        setTimeout(function(){
            nomeEl.innerText = nome;
            textoEl.innerText = msg;
            tempoEl.innerText = tempo;
            
            nomeEl.style.opacity = '1';
            textoEl.style.opacity = '1';
            tempoEl.style.opacity = '1';
        }, 200);
    }
    
    // Testemunho inicial
    nomeEl.innerText = nomesMocambicanos[0];
    textoEl.innerText = mensagens[0];
    tempoEl.innerText = "agora";
    nomesUsados.push(nomesMocambicanos[0]);
    
    // Inicia rotação após 5 segundos (junto com o aparecimento)
    timeoutInicial = setTimeout(function(){
        // Muda a cada 6 segundos (tempo ideal de leitura)
        intervalo = setInterval(atualizarTestemunho, 6000);
    }, 5000);
    
    // Botão fechar
    fecharBtn.addEventListener('click', function(){
        container.classList.add('fechado');
        clearInterval(intervalo);
        clearTimeout(timeoutInicial);
    });
    
    // Clicar no header reabre (opcional)
    document.querySelector('.testemunhos-header').addEventListener('click', function(e){
        if(e.target.classList.contains('testemunhos-fechar')) return;
        if(container.classList.contains('fechado')) {
            container.classList.remove('fechado');
            // Reinicia a rotação
            intervalo = setInterval(atualizarTestemunho, 6000);
        }
    });
    
});
