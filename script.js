// ===== TEU CÓDIGO ORIGINAL (100% FUNCIONAL) =====
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

// BOTÃO DA ETAPA 1
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

// CONTADOR
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

// BOTÕES DE PAGAMENTO
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

// BOTÃO COPIAR
document.getElementById("copiarBtn").addEventListener("click", function(){
let texto = document.getElementById("paymentInfo").innerText;
navigator.clipboard.writeText(texto);
mostrarToast("Copiado com sucesso");
document.getElementById("processingInfo").classList.remove("hidden");

setTimeout(function(){
document.getElementById("confirmBtn").classList.remove("hidden");
}, 15000);
});

// BOTÃO CONFIRMAR
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

// ===== SISTEMA DE VAGAS =====
setInterval(function(){
if(vagas > 3) {
if(vagas > 10) {
vagas -= 2;
} else if(vagas > 6) {
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
}, 8000);

// ===== NOTIFICAÇÕES DE COMPRA =====
setInterval(function(){
if(vagas > 3) {
let nomesCompradores = [
"Amélia", "Bernardo", "Cecília", "Dércio", "Ernesto", 
"Francisca", "Gildo", "Helena", "Inácio", "Júlia"
];
let nome = nomesCompradores[Math.floor(Math.random() * nomesCompradores.length)];
mostrarNotificacaoCompra(nome + " comprou agora 🔥");

if(navigator.vibrate) {
navigator.vibrate(50);
}
}
}, 12000);

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

// ===== COMPONENTE DE NOTIFICAÇÕES MOÇAMBICANAS =====
document.addEventListener('DOMContentLoaded', function(){
    
    let container = document.getElementById('notificacoesMensagens');
    if(!container) return;
    
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
        "Hortência Cossa", "Iolanda Matsinhe", "Jacinta Nkosi", "Leonel Muchanga"
    ];
    
    // Mensagens CURTAS - algumas com TV Miramar
    let mensagens = [
        "Obrigado TV Miramar pela cura! 🙏",
        "Funcionou comigo!",
        "TV Miramar mostrou a receita e curei",
        "Negativo no médico",
        "Graças a Deus e TV Miramar",
        "Estou curado! 🔥",
        "Receita da TV Miramar salvou-me",
        "Funcionou mesmo!",
        "Obrigado TV Miramar",
        "Cura confirmada",
        "Testei negativo 🙌",
        "TV Miramar tem a solução",
        "Milagre aconteceu",
        "Já estou curado",
        "Obrigado pela receita",
        "Funciona 100%",
        "Vi na TV Miramar e funcionou",
        "Negativo após 30 dias",
        "Receita poderosa",
        "TV Miramar mostrou e curei",
        "Recomendo a todos",
        "Cura do HIV funciona",
        "Testei ontem: negativo"
    ];
    
    let comentariosAtivos = [];
    let maxComentarios = 3;
    let nomesUsados = [];
    
    function getNomeNaoUsado() {
        let nomesDisponiveis = nomesMocambicanos.filter(function(nome){
            return !nomesUsados.includes(nome);
        });
        
        if(nomesDisponiveis.length === 0) {
            nomesUsados = [];
            nomesDisponiveis = nomesMocambicanos;
        }
        
        let nomeEscolhido = nomesDisponiveis[Math.floor(Math.random() * nomesDisponiveis.length)];
        nomesUsados.push(nomeEscolhido);
        return nomeEscolhido;
    }
    
    function getTempoRelativo() {
        let tempos = ["agora", "há 1 min", "há 2 min", "há 5 min", "há 10 min", "há 15 min"];
        return tempos[Math.floor(Math.random() * tempos.length)];
    }
    
    // Comentários iniciais
    function adicionarComentarioInicial() {
        let iniciais = [
            { msg: "Obrigado TV Miramar pela cura! 🙏", nome: "Joana Alice" },
            { msg: "Funcionou comigo, testei negativo", nome: "Martinha Simbine" },
            { msg: "TV Miramar mostrou e curei o HIV", nome: "Otall Smih" }
        ];
        
        iniciais.forEach(function(item){
            nomesUsados.push(item.nome);
            comentariosAtivos.push({
                nome: item.nome,
                mensagem: item.msg,
                tempo: getTempoRelativo()
            });
        });
        
        renderizar();
    }
    
    function renderizar() {
        if(!container) return;
        let html = '';
        let paraMostrar = comentariosAtivos.slice(-maxComentarios);
        
        for(let i = 0; i < paraMostrar.length; i++) {
            let com = paraMostrar[i];
            html += '<div class="notificacao-item">' +
                '<div class="notificacao-nome">' + com.nome + '</div>' +
                '<div class="notificacao-texto">' + com.mensagem + '</div>' +
                '<div class="notificacao-tempo">' + com.tempo + '</div>' +
                '</div>';
        }
        
        container.innerHTML = html;
    }
    
    function rotacionarComentarios() {
        if(comentariosAtivos.length >= maxComentarios) {
            comentariosAtivos.shift();
        }
        
        let nomeNovo = getNomeNaoUsado();
        let msgNova = mensagens[Math.floor(Math.random() * mensagens.length)];
        
        comentariosAtivos.push({
            nome: nomeNovo,
            mensagem: msgNova,
            tempo: getTempoRelativo()
        });
        
        renderizar();
    }
    
    // Iniciar
    adicionarComentarioInicial();
    
    // Rotação a cada 7-12 segundos
    setInterval(rotacionarComentarios, Math.floor(Math.random() * 5000 + 7000));
    
});
